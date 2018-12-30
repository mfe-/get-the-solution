## Protection and authorization for a Single Web Application and a RESTFul Service
### Introduction
There exists some ways to implement an authentication into RESTFul Service. For this article I will focus on the HTTP Token Header technique, because its really easy to implement with the JsonWebTokenHandler.(RESTful Authentication, 22.08.2015, http://stackoverflow.com/questions/319530/restful-authentication?lq=1  ).

To keep it short we focus on the practical aspect. The demonstration contains a Single Web Application with AngularJS which is hosted on an ASP.NET MVC page. The RESTFul Service will be represented by an ASP.NET WebApi project. I want to mention that most of the code was built from code snippets which I researched from other blogs or stackoverflow to reduce time. So the example project consists of several code snippets and some custom coding.

As you know the RESTFul Service is stateless. We need to achieve that the WebApi can correctly identify our current requests to a user. There the token, or precisely the Json Web Token, comes into play. Because the returned data is formatted as JSON the term Json Web Token is more common in that subject.

When sending a valid login request to the WebApi, it will issue a token for the logged in user. The SWA will catch the returned token from the login. From now the SWA will add the token to each call into the HTTP Header. The WebApi will check if there exists a JWT and extract the containing user information. This process is visualized in the graphic below.

![sts](http://url/to/img.png)