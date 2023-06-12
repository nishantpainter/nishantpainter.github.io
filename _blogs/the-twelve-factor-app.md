---
title: The Twelve Factor App
description: The twelve factor app is a set of practices followed by developers after observing a variety of software as a service in the market. The significance of following this methodology is to promote the growth of application, easing the maintenance and limiting the cost of software over the time.
ogsubtitle: The Twelve Factor App
tags:
  [
    "12-factor-app",
    "twelve-factor-app",
    "saas",
    "deployment",
    "software-engineering",
  ]
categories: ["Software Engineering", "Deployment", "Saas"]
date: 2023-06-08
---

# The Twelve Factor App

Nowadays software is often served over the web and is available to use everywhere. Such applications demand frequent development, operation management and scaling.

The twelve factor app is a set of practices followed by developers after observing a variety of software as a service in the market. The significance of following this methodology is to promote the growth of application, easing the maintenance and limiting the cost of software over the time.

This article provides an overview about the twelve factors.

## The factors

- [Codebase](#codebase)
- [Dependencies](#dependencies)
- [Config](#config)
- [Backing services](#backing-services)
- [Build, release, run](#build-release-run)
- [Processes](#processes)
- [Port binding](#port-binding)
- [Concurrency](#concurrency)
- [Disposability](#disposability)
- [Dev/prod parity](#devprod-parity)
- [Logs](#logs)
- [Admin processes](#admin-processes)

## Codebase

**There should be one code base for one application**. This code base can be used to deploy multiple instances of the same application, for e.g production site, staging and local deployments. Since the code is often maintained by version control systems such as git, these deployments can have different versions but the same code base.

<Figure src='/img/blog/the-twelve-factor-app/codebase.png' alt='Codebase' caption='Codebase' />

## Dependencies

Programs often depends on third party packages or libraries and are maintained using package management system, for e.g `npm` for `node` packages. These libraries can be installed system-wide or local to the application. **The twelve factor app should never depend upon the system-wide installed dependencies or system-tool**. System tools are the software installed on the machine. The app should make sure that all the libraries consumed are within the scope of application and must be declared using manifest file, for e.g `package.json` in `node` application.

<Figure src='/img/blog/the-twelve-factor-app/dependencies.png' alt='Dependencies' caption='Dependencies' />

## Config

Config is the information that the application uses in deployments. This information can vary based on the type of deployment i.e `production`, `staging`, `development` etc. **In a twelve factor app, the config that varies should never be stored within the code**. The varying config should be separated from the codebase.

<Figure src='/img/blog/the-twelve-factor-app/config.png' alt='Config' caption='Config' />

## Backing services

An application depends on various locally or third party managed services by resource URL for it's execution, like databases such as `PostgresSQL`, messaging system such as `RabbitMQ` or API services from `Google Maps`. **The twelve factor app should not distinguished between local and third party services**. An app should be easily able to switch between services without making any code changes. For e.g no change in code, except config, should be required if the app decides to use hosted database service instead of local.

<Figure src='/img/blog/the-twelve-factor-app/backing-service.png' alt='Backing services' caption='Backing services' />

## Build, release, run

**The app should practise three steps for deployment i.e build, release and run; as well as maintained a strict separation between them**. `Build` is converting the code into an executable bundle, `release` is setting the config for the bundle to be deployed, and `run` executes the bundle with the config launching it as an application.

<Figure src='/img/blog/the-twelve-factor-app/build-run-release.png' alt='Build, release, run' caption='Build, release, run' />

## Processes

The application can have multiple instances in the execution environment. **The app instance should never store anything in memory for reference (stateless) and tracks the state of another app instance**. Not following the principle can result in stale state for multiple instances and compromises data integrity. Any information that requires sharing between instances should be stored in persistent storage such as a database.

<Figure src='/img/blog/the-twelve-factor-app/processes.png' alt='Processes' caption='Processes' />

## Port binding

**The app should expose a service by binding it to a port**. The service is identified by the port rather than a domain or ip address. The app should be self-contained to provide the service and doesn't rely upon the injections of a web server for exposing its service. This also allow an app to be used as backing service to another app.

<Figure src='/img/blog/the-twelve-factor-app/port-binding.png' alt='Port binding' caption='Port binding' />

## Concurrency

**The app should support and promote concurrency**. It should be able to handle varying loads and requests. This principle recommends architecting the app to handle loads by organising processes based on their purpose and separating them. The application can scale out using this process model.

<Figure src='/img/blog/the-twelve-factor-app/concurrency.png' alt='Concurrency' caption='Concurrency' />

## Disposability

**The app should be able to start and stop gracefully within short time**. The app should be architect to have minimum starting time to support elastic scaling and should shut down refusing new requests and finishing existing requests. The app should also be able to handle unexpected termination caused by external factors such as hardware failures.

<Figure src='/img/blog/the-twelve-factor-app/disposability.png' alt='Disposability' caption='Disposability' />

## Dev/prod parity

**The development, staging and production environment should be kept similar**. The app should be designed for continuous deployment. The developer or code owner must be closely involved in deployment. The code being written should be deployed after few hours or minutes, being written. The tools used for development and production environments should be as similar as possible.

<Figure src='/img/blog/the-twelve-factor-app/devprod-parity.png' alt='Devprod Parity' caption='Devprod Parity' />

## Logs

Logs provide us with insight into the behaviour of running applications. Such logs are often written to a file on the server for later reference. **This principle suggest sending log data in a stream that can be used by multiple consumers**. The app should not be concerned with the storage of its output stream. It should not write to a log file, instead each process writes its event stream to standard output.

<Figure src='/img/blog/the-twelve-factor-app/logs.png' alt='Logs' caption='Logs' />

## Admin processes

Administration or maintenance tasks for the app include running database migration, running scripts etc. **This principle suggests considering admin processes similar to any other process of the app**. The admin processes must also go through the same cycle as other processes in the app. They should be considered as a part of software life cycle development.

<Figure src='/img/blog/the-twelve-factor-app/admin-processes.png' alt='Admin processes' caption='Admin processes' />

## Conclusion

The twelve factor apps are principles designed to create applications that are easily maintained and scale. It enforces elasticity and modularity. These principles are used by many SaaS application providers.

## References

[12factor.net](https://12factor.net)
