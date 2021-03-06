This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Structure of the codebase

<pre>
├── App.scss              # Main styling for the application, uses variables from test-configuration/_overrides.scss
├── App.tsx               # Main entry point with route configuration
├── ButtonControl.tsx     # Explore buttons that are used both on the home page and the explore page
├── Footer.tsx            # Footer with contact us/terms of service
├── Header.tsx            # Home page header with summary and title
├── Home.tsx              # Home page
├── Navbar.tsx            # Navbar that reads over the routes
├── RouteResolver.tsx     # For any subpage not in Home/Explore this hooks up the configuration to that URL
├── config                # The main configuration folder read for the app 
├── test-configuration    # Folder with an example config that gets used for testing
├── index.tsx             # Boilerplate code that hooks the application up with index.html
├── portal-components     # portal specific components that are not related to layout
├── configurations        # folder containing all the portal configs
├── tests                 # all the tests for the application
└── types                 # types used throughout the project
</pre>

# Configuartion Example

For full code see [test-configuration](https://github.com/portals/app-template/src/test-configuration)

Structure of test-configuration

<pre>
test-configuration/
├── docTitleConfig.ts                       # Configure the document title
├── exploreHomeConfiguration                # Configure the data for explore and home page
│   ├── data.ts                             
│   ├── index.ts                            
│   └── publications.ts                     
├── footerConfig.ts                         # Configure the footer data -- terms of use, contact us
├── headerConfig.ts                         # Configure the text on the header of the home page
├── loadingScreen.tsx                       
├── routesConfig.ts                         # Configure main routes for the app -- what is available and what synapse object 
├── scripts                                 # build scripts that export s3 bucket names
│   ├── exportS3ProductionBucketName.sh     
│   └── exportS3StagingBucketName.sh        
└── style                                   
    ├── _overides.scss                      # contains main theme colors
    └── header.svg                          # OPTIONAL: File that will be used for background-img on home page header
</pre>
