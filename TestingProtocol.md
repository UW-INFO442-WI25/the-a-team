Prototype and Testing Protocol 

Since we already have our static wireframes in Figma, we will use those as the foundation for development. If needed, we can refine them further or create an interactive prototype to clarify user flows, but for now, we will focus on translating the existing designs into code.
Our design prototype: https://www.figma.com/design/wcPdOrqBhUCDlEYmJu0z3O/Untitled?node-id=0-1&t=X9K9hp9C6ZceavF5-1

What are the acceptance tests that your team will perform before beginning user testing?
    Verify that all links, buttons, and interactions function correctly and lead to the expected screens.
Check that input fields for sign-up, login, and filters accept and validate appropriate data (e.g., email format, required fields).
Ensure that the interactive map loads correctly, displays locations properly, and applies filters accurately.
Confirm that all pages (home, description, etc.) present the intended content without missing or misaligned elements.
Test the prototype on different screen sizes to ensure layouts and UI components adapt correctly


Describe the acceptance testing process for at least two key features, including which results would indicate a successful test and which results would indicate a failed test.
    Test Process:
Click through all navigation elements (buttons, links, tabs) to verify they lead to the correct pages.
Follow a typical user journey (e.g., home page → filters → property description → apply now).
Ensure that users can return to the home page from any screen.
Success Criteria:
All navigation elements direct users to the expected pages.
There are no dead links or unexpected redirects.
The back and forward buttons work as expected.
Failure Criteria:
Clicking a button or link does not navigate to the correct page.
Users encounter broken links or dead-end pages.
Navigation elements behave inconsistently across screens.


What are the limitations of your acceptance tests? List some of the ways that your team's in-house testing environment may differ from the context in which your expected users will be interacting with the product.
    It is difficult to fully replicate users’ environment or specific behaviors when performing user testing. Our testing process would benefit from keeping the environment as close to what is realistic as possible. However, users' actual behaviors might differ from the objectives of user testing. For example, if a tester is instructed to click through every navigation element to ensure it works properly, they are focusing on if the navigation works rather than how they could naturally navigate through the interface. There are additional tests meant to mimic a more accurate user experience, but it is hard to fully predict how people will interact with the application in different ways. Similarly, attempting to input every possible invalid character may be a good way to determine whether proper error messages will be displayed, but it’s hard to replicate scenarios where this may not display properly unless they come up accidentally. The main limitations of our acceptance tests can mostly be described as the difficulty in perfectly replicating natural environments and behaviors.


How will you conduct user testing?
    First, we would design our testing goals:
Usability - Is the app intuitive and easy to navigate?
Effectiveness - Can students successfully find and compare housing options?
Relevance - Do the filters (price, amenities, occupancy) align with user needs?
	Then, we would recruit participants. We will target UW students from diverse backgrounds (low-income, marginalized, international, etc.). We will also test the app on commuters vs. on-campus residents.
	When we conduct our testing sessions, we will use:
Task-Based Testing - Ask users to complete specific actions (e.g., finding a housing listing within budget).
Think-Aloud Protocol - Have users verbalize their thoughts while navigating the app.
Surveys & Interviews - Gather qualitative feedback on ease of use and potential improvements.
	We will collect both quantitative (task success rates, time to complete tasks) and qualitative (user feedback, frustrations, suggestions) data to refine the platform.


How will you decide which bugs to fix first?
    First, we will approach bugs based on how bad they are and how much they mess with the user experience and accessibility. We'll also keep an eye on user feedback and focus on fixing the things that frustrate people the most. In this case, our approach will be to focus on:
Critical Bugs – Anything that can break the key features of the web. Like busted navigation, login failures, or filters not working right. Since it's a major thing, it gets fixed first.
Performance & Accessibility Issues – If the web loads too slowly, looks weird on different screen sizes, or isn’t accessible, we’ll fix that to keep everything smoothly, accessible, and usable for everyone.
Minor Bugs – Tiny mishaps like minor misalignments, or little performance tweaks will come last after the big stuff is handled.



How will you re-test the solution after the bug fixes have been completed?  
	After  completing the big fixes, we will re-test the solution by: 
Verifying all related features to ensure the fixes didn't break anything else. For example, if a navigation bug was fixed, all navigation elements will be retested.
Focusing on retesting the specific bugs fixed, such as login functionality or performance issues to ensure that critical features now work without errors.
Simulating real user actions to check for any unexpected side effects to help uncover new issues that the regular tests may not cover.
Testing the original criteria continuously so that everything is working as intended and to ensure the bugs are resolved and to meet expectations. 
