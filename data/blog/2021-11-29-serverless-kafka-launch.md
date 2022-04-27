---
slug: serverless-kafka-launch
date: 2021-11-29
title: 'Upstash Launches Serverless Kafka'
sidebar_label: 'Upstash Launches Serverless Kafka'
authors: enes
image: img/blog/kafkalaunch/cover.jpg
tags: [serverless, kafka, edge]
---


We are thrilled to announce Upstash Kafka today. [Upstash Kafka](https://docs.upstash.com/kafka) is the first Serverless Kafka offering. With a pay-per-request model, you can have a fully managed Kafka cluster without paying hundreds of dollars. With the free tier, you can create a Kafka cluster in seconds and without entering your credit card. The [Upstash](https://upstash.com) team takes care of availability, maintenance, scaling, upgrades and all the other tedious stuff while you focus on your app.


### Why Kafka?

When we first launched our Redis service, it quickly became popular in the serverless community. More than 8,000 databases have been created since February. This number is much higher than we expected when we first launched Upstash. We continue to improve our Redis service. But we also realized how great is the need for data solutions that fit into the new serverless world.

<!--truncate-->

We started to think about what our next service should be. We were impressed by Apache Kafka's increasingly critical role in modern architectures. More and more use cases require Kafka as the central nerve system to deal with the increasing complexity. Meanwhile, Kafka is still difficult to set up and maintain. Current Kafka Cloud offerings are expensive and complex. We were excited when we realized the potential of Serverless Kafka, where any developer can leverage Kafka without worrying about servers and the next bill. A Kafka service that offers a lightweight REST API in addition to the Kafka protocol so you can send your messages from serverless and edge functions (AWS Lambda, Cloudflare Workers etc).


### What is Serverless Kafka?

We believe a serverless data service requires the following criteria:



* **Price scales to zero:** A true serverless offering shouldn't charge you if you're not actively using it. Price-per-request is our most outstanding feature. We've been designing our products and infrastructure to fit this pricing model from day one. This requires minimizing fixed costs, which is quite difficult for a beast like Kafka.
* **No operational burden for the user:** The user creates the Kafka topic and starts using it. High availability, scalability, upgrades, backups… it's all our responsibility.
* **Connectionless:** Serverless functions do not hold state. So you should be able to access your data with a stateless connection. Our Kafka offering supports the Kafka TCP protocol so all Kafka clients will work with Upstash. We also have [a built-in REST API](https://docs.upstash.com/kafka/rest) to enable connectionless environments like AWS Lambda, Cloudflare Workers, Fastly Compute@Edge.


### Developer First

Upstash is built by developers. We believe we know what developers love. They love simplicity and ease of use without sacrificing performance and power. This is not easy and not possible on the first day. Our strategy is to target the developers' love above all else. Our pricing should be simple and trap-free. Our user interface should be clean and quiet. Our APIs should be easy to learn and intuitive. And we should all be open to developers’ feedback. We believe these are behind the success of Upstash Redis and apply the same to Upstash Kafka. We believe we can make a big difference when we look at existing Kafka offerings.


### Simple Pricing

Upstash Kafka price is based on the number of messages produced and consumed. Single zone cluster costs $0.2 per 100K messages. Multi zone cluster, which we recommend for production, costs $0.6 per 100K messages. The storage costs $0.25 per GB. We do not charge for bandwidth or number of partitions. We do not apply different prices for reads and writes. Our users should be able to calculate their cost easily.

To avoid surprise bills, Upstash guarantees that your monthly cost for a cluster will not exceed the ceiling price (price cap). The price cap for single zone clusters is $120 per month, for multi zone clusters, it is $360 per month. Check [our pricing page](https://docs.upstash.com/kafka/pricing) for more details.


### REST API

I have already mentioned the critical role of the REST API for serverless and edge functions. For example, you cannot use any of the Kafka clients in Cloudflare Workers. So creating a REST API was a must for us. But it wasn't easy.

Kafka is a very powerful technology. The difficulty is that if a product is very powerful, its API tends to be complex. Existing Kafka clients reflect this complexity with the power of Kafka. We wanted to introduce a REST API for the serverless community that would be simple and intuitive without sacrificing power. We believe [this](https://docs.upstash.com/kafka/kafkaapi) is a good first step and will be evolving for the better with the feedback we will receive from our users.


### Upstash vs Confluent

We know Confluent also calls its product serverless but we do not think it is true serverless. Confluent charges per partition but also they have base cost. This means price can not scale to zero, so you should pay even when you are not using the cluster at all. Only the basic offering has zero base cost but it is not recommended for production. The standard and dedicated offerings can get expensive quickly as they have hourly base cost in addition to bandwidth, partition count fees.


### Upstash vs AWS MSK

AWS MSK is everything but serverless. They charge per instance per hour. A reliable system (3 brokers, m5large) starts from $450 monthly.


### What’s Next and Closing Words

Upstash Kafka is our first step into the messaging world. It is a big step. We have plans for the future, for example:



* Fully managed connectors to other data services (e.g. Elasticsearch, MongoDB etc)
* Global Kafka clusters where the data is replicated to multiple continents.

You can [check our documentation](https://docs.upstash.com/kafka) to learn more. And you can start using Serverless Kafka for free by [creating an Upstash account](https://console.upstash.com/).

We love to improve [Upstash](https://upstash.com) by your feedback. Let us know your thoughts on [Twitter](https://twitter.com/upstash) or [Discord](https://discord.gg/w9SenAtbme). 