document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const caseStudy = params.get("case");

    if (caseStudy) {
        fetch(`case-studies/${caseStudy}.html`)
            .then(response => {
                if (!response.ok) throw new Error("Case study not found");
                return response.text();
            })
            .then(data => {
                document.getElementById("case-study-content").innerHTML = data;

                // Extract case study title
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = data;
                const caseTitle = tempDiv.querySelector("h1")?.textContent || "Case Study";

                // Update document title
                document.title = `Case Study | ${caseTitle}`;

                // Update breadcrumb
                const breadcrumb = document.querySelector(".breadcrumb");
                breadcrumb.innerHTML = `<a href="work.html">Work</a> / ${caseTitle}`;
            })
            .catch(error => {
                document.getElementById("case-study-content").innerHTML = `
                    <h1>Case Study Not Found</h1>
                    <p>The requested case study does not exist.</p>
                `;
                document.title = "Case Study | Not Found";
            });
    } else {
        document.getElementById("case-study-content").innerHTML = `
            <h1>Invalid Request</h1>
            <p>No case study was specified.</p>
        `;
        document.title = "Case Study | Invalid Request";
    }
});
