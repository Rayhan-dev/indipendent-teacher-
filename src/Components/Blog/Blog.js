import React from "react";

const Blog = () => {
  return (
    <div className="container my-5" style={{minHeight:"65vh"}}>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between authorization and authentication
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body text-start">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Authentication</th>
                    <th scope="col">Authorization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Authentication is used to verify who the user is</td>
                    <td>
                      Authoorization means what a user can access . it can be a
                      page / application / files etc{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Authentication can be confirmed through password / a
                      specific account
                    </td>
                    <td>
                      Authoorization is more likely to setted up by tghe
                      programme / application. <br />
                      The programme/ application set the access to specfic file
                      for the user. it's like a role for the user{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why are you using firebase? What other options do you have to
              implement authentication?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body text-start">
              I am using firbase for autheticate the user of my application,set
              specific access to pages of my application for the users and to
              host my user . There are many other services for hosting out
              there. I can use github hosting / netlify hosting to host my site
              other than firebase.I can also use{" "}
              <b>Parse , Back4App , Kuzzle , AWS Amplify</b> etc as alternative
              of <b>Firebase</b>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What other services does firebase provide other than
              authentication
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body text-start">
              Firebase services other than <b>authentication</b>:
              <ul>
                <li>Realtime database</li>
                <li>Hosting</li>
                <li>Test lab</li>
                <li>Notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
