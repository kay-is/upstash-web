import { defineDocumentType, makeSource } from "contentlayer/source-files";
import authors from "./authors";

export const Job = defineDocumentType(() => ({
  name: "Job",
  filePathPattern: `job/*.md`,
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    experience: { type: "string", required: true },
    how: { type: "string", required: true },
    location: { type: "string", required: true },
    skills: { type: "json", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ""),
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    authors: { type: "string", required: true },
    tags: { type: "json", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => {
        return doc._raw.sourceFileName.substring(11).replace(/\.md$/, "");
      },
    },
    author: {
      type: "json",
      resolve: (doc) => {
        return authors[doc.authors];
      },
    },
    image: {
      type: "string",
      resolve: (doc) => {
        const author = authors[doc.authors];
        return encodeURI(
          [
            "https://upstash-og-image.vercel.app/",
            doc.title,
            ".png",
            "?theme=light",
            "&md=1",
            "&fontSize=100px",
            "&authorName=",
            author.name,
            "&authorTitle=",
            author.title,
            "&authorPhoto=",
            author.image_url,
          ].join("")
        );
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Job, Blog],
});