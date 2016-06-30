# service-offerings

Angular2 source code for each of the interactive Service Offerings at https://www.emshub.cloud/#/clickthrough: Introduction, Single Sign-On (SSO), Mobile Application Management (MAM), Mobile Device Management (MDM), and Multi-Factor Authentication (MFA). The code here can be integrated into sites or run locally.


##Individual Service Offerings
The individual Service_Offerings folders have self-contained code for individual Service Offerings. If you only want to use one of the five Service Offerings, we recommend you just grab that folder. 


##All Service Offerings

The All_Service_Offerings folder has the code and content for every Service Offering on https://www.emshub.cloud.com/#/clickthrough.
If you're planning to use more than one Service Offering, it's recommended that you get this folder to avoid duplicate code. All Service Offerings use the same base components; it is only the content they read in that differs. 

That content lives in...
* wwwroot/lib/json: content of a Service Offerings - titles, descriptions, pop up text, references to image files, implementation steps, etc (broken out by file name)
* wwwroot/lib/img/clickthrough: images for Service Offerings (broken out by folders)
* wwwroot/lib/pdf: implementation steps for Service Offerings in PDF format (broken up by folders)

