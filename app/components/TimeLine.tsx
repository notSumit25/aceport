import React, { useState } from "react";

const TimeLine = () => {
  const [selectedCompany, setSelectedCompany] = useState(1);

  const companies = [
    {
      id: 1,
      name: "Geniushub",
      role: "Frontend Developer Intern",
      year: "Jan 2024 - March 2024",
      details: [
        "Revamped the Geniushub website using Next.js and incorporated sleek animations for a clean and polished look.",
        " Integrated APIs in the LuneBlaze Website and Revamped it to give it a Modern look",
        "Successfully Incorporated a Form for the Internship’s Registrations and Built a CMS to Manage the Responses",
        "Contributed in the LuneBlazePortal Website and Integrated Various Features Like Cron, RazorPay, Form Builder.",
      ],
    },
    {
      id: 2,
      name: "LuneBlaze",
      role: "Quality Assurance Intern",
      year: "Oct 2023 - Dec 2023",
      details: [
        "Developed a service for daily automated unit tests, reducing bug identification and resolution time.",
        "Implemented a Python script with Selenium, reducing testing time by 30% and increasing accuracy by 20%.",
        "Integrated Pytest framework, increasing test coverage by 15% and reducing post-release defects by 10%.",
        "Engineered a tkinter-based GUI, reducing test setup time by 25% and increasing daily test runs by 40%.",
      ],
    },
  ];

  const handleCompanyClick = (companyId: any) => {
    setSelectedCompany(companyId);
  };

  return (
    <div id="experience" className="w-full text-white p-20 space-y-10">
      <span className="text-5xl font-extrabold">
        Experience<span className="text-blue-500 text-5xl">.</span>
      </span>
      <div className="flex">
        <div className="w-1/4 space-y-4 text-lg flex flex-col justify-center">
          {companies.map((company) => (
            <div
              key={company.id}
              className={`cursor-pointer ${
                selectedCompany === company.id ? "text-blue-500" : ""
              }`}
              onClick={() => handleCompanyClick(company.id)}
            >
              {company.name}
            </div>
          ))}
        </div>
        <div className="w-3/4">
          {selectedCompany && (
            <>
              <div className="text-lg font-medium">
                {
                  companies.find((company) => company.id === selectedCompany)
                    ?.role
                }
                <span className="text-blue-500">
                    {" @ "}
                    {
                        companies.find((company) => company.id === selectedCompany)
                            ?.name
                    }
                </span>
              </div>
              <div className="font-light mb-4 text-xs">
                {
                  companies.find((company) => company.id === selectedCompany)
                    ?.year
                }
              </div>
              <div className="space-y-2">
                {companies
                  .find((company) => company.id === selectedCompany)
                  ?.details.map((detail, index) => (
                    <p key={index}>
                      <span className="text-blue-500">&#10003;</span> {detail}
                    </p>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
