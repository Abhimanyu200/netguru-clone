import React from "react";

const Services = () => {
  const sections = [
    {
      title: "Product Design",
      description: "Shaping your digital products with creativity.",
      categories: [
        {
          name: "Product design services",
          items: [
            { title: "UX Design", description: "User-focused design" },
            { title: "UI Design", description: "Elegant interfaces" },
          ],
        },
      ],
    },
    {
      title: "Web Development",
      description: "Building scalable, responsive, and modern web apps.",
      categories: [
        {
          name: "Web development services",
          items: [
            { title: "Frontend", description: "React, Angular, etc." },
            { title: "Backend", description: "Node.js, Django, etc." },
          ],
        },
      ],
    },
    {
      title: "Mobile Development",
      description:
        "Creating apps that deliver excellent performance and user experience.",
      categories: [
        {
          name: "Mobile development services",
          items: [
            { title: "iOS Development", description: "Swift, Objective-C" },
            { title: "Android Development", description: "Kotlin, Java" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-6">{section.description}</p>

            {/* Categories */}
            {section.categories.map((category, catIndex) => (
              <div key={catIndex} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 border rounded-lg shadow-sm hover:shadow-md bg-white"
                    >
                      <h4 className="font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
