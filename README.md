## ASP.NET Core Application

### Visual Studio

-   Open your solution in **Visual Studio 2017 v15.3.5+** and **build**
    the solution.
-   Select the '**CaseStudy.Web.Host**' project as the **startup project**.
-   Run the application. It will show **swagger-ui** if it is successful:
  
If you have problems with running the application, close and then re-open
Visual Studio again. It sometimes fails on the first package restore.

#### DotNot CLI 
Open a command prompt, navigate to the **CaseStudy.Web.Host** folder which contains
the **package.json** file :

run the following command  

    dotnet restore

run the following command 

    dotnet run


## Angular Application
The Angular application needs the following tools installed:

-   [nodejs](https://nodejs.org/en/download/) 6.9+ with npm 3.10+
-   Typescript 2.0+

We used the [angular-cli](https://cli.angular.io/) to develop the Angular
application.

#### Restore Packages

Open a command prompt, navigate to the **CaseStudy.Web.Host** folder which contains
the **package.json** file and run the following command to **restore the npm packages**:

    npm install


#### Run The Application

In your opened command prompt, run the following command:

    ng serve

or

    npm run

> Sample Csv File is located under **root**

> Uploaded Csv Files & Exported Files are located in **src/CaseStudy.Web.Host/wwwroot/Upload**
 

## Open Source Libraries:

- AspnetBoilerPlate
<https://github.com/aspnetboilerplate/module-zero-core-template>
- UI Components for Angular <https://www.primefaces.org/primeng>
- Extended Xml Serializer for .Net <https://github.com/wojtpl2/ExtendedXmlSerializer>
- The .NET Standard / .NET Core version from the System Linq Dynamic functionality. <https://github.com/StefH/System.Linq.Dynamic.Core/>
- CsvHelper https://github.com/JoshClose/CsvHelper
- Swashbuckle.AspNetCore <https://github.com/domaindrivendev/Swashbuckle.AspNetCore>
- FluentValidation <https://github.com/JeremySkinner/FluentValidation>
  