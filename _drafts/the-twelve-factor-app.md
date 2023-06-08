# The Twelve Factor App

Nowadays software are often served over the web and are available to use everywhere. Such applications demands frequent development, operation management and scaling.

The twelve factor app is a set of practices followed by developers after observing variety of software in the market. The significance of following this methodology is to promote the growth of application, easing the maintenance and limiting the cost of software over the time.

This article provides an overview about the twelve factors.

## The factors

- Codebase
- Dependencies
- Config
- Backing services
- Build, release, run
- Processes
- Port binding
- Concurrency
- Disposability
- Dev/prod parity
- Logs
- Admin processes

### Codebase

**There should be one code base for one application**. This code base can be used to deploy multiple instance of the same application, for e.g production site, staging and local deployments. Since the code is often maintained by version control system such as git, these deployments can have different versions but same code base.

### Dependencies

Programs often depends on third party packages or libraries and are maintained using package managment system, for e.g `npm` for `node` packages. These libraries can be installed system-wide or local to the application. **The twelve factor app should never depend upon the system-wide installed dependencies or system-tool**. System tools are the software installed on the machine. The app should make sure that all the libraries consumed are within the scope of application and must be declared using manifest file, for e.g `package.json` in `node` application.

### Config

Config is the information that the application uses in deployments. This information can varies based on the type of deployment i.e `production`, `staging`, `development` etc. **In a twelve factor app, the config that varies should never be stored within the code**. The varying config should be separated from the codebase.

### Backing services

An application depends on various locally or thirdy party managed services by resource URL for it's execution, like databases such as `PostgresSQL`, messaging system such as `RabbitMQ` or API services from `Google Maps`. **The twelve factor app should not distinguished between local and third party services**. An app should be easily able to switch between services without making any code changes. For e.g no change in code, except config, should be required if the app decide to use hosted database service instead of local.

### Build, release, run

**The app should practice three steps for deployment i.e build, release and run; as well as maintained a strict separation between them**. `Build` is converting the code into executable bundle, `release` is setting the config for the bundle to be deployed, and `run` execute the bundle with the config launching it as an application.

### Processes

The application can have multiple instances in the execution environment. **The app instance should never store anything in memory for reference (stateless) and tracks the state of another app instance**. Not following the principle can result in stale state for multiple instances and compromises data integrity. Any information that requires sharing between instances should be stored in persisted storage such as database.

### Port binding

**The app should expose a service by binding it to a port**. The service is identified by the port rather than a domain or ip address. The app should be self-contained to provide the service and doesn't rely upon the injections of webserver for exposing it's service. This also allow an app to be used as backing service to another app.

### Concurrency

**The app should support and promote concurrency**. It should be able to handle varying loads and requests. This principle recommends architecting the app to handle loads by  organising processes based on their purpose and separating them. The application can scale out using this process model.

### Disposability

**The app should be able to start and stop gracefully within short time**. The app should be architect to have minimum starting time to support elastic scaling and should shut down refusing new request and finishing existing requests. The app should also be able to handle unexcepted termination caused external factors such as hardware failures.

### Dev/prod parity

**The development, staging and production environment should be kept similar**. The app should be designed for continuous deployment. The developer or code owner must be closely involved in deployment. The code being written should be deployed after few hours or minutes, being written. The tools used for development and production enviornment should be as similar as possible.

### Logs

Logs provides us with insight of behaviour of running application. Such logs are often written to a file on server for later reference. **This principle suggest sending log data in a stream that can be used by multiple consumers**. The app should not be concerned with the storage of it's output stream. It should not write to log file, instead each process writes it event stream to standard output.

### Admin processes

Adminstration or maintenance tasks for the app includes running database migration, runing scripts etc. **This principle suggests considering admin processes similar to any other process of the app**. The admin processes must also go through the same cycle as other processes in the app. They should be considered as a part of software life cycle development.

## Conclusion

The twelve factor app are principles designed to create application that are easily to maintained and scale. It enforces elasticity and modularity. These principles are used by many SaaS application providers. 

## References

[12factor.net](https://12factor.net)

