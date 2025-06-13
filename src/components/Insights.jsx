import React from "react";

const insights = [
  {
    title: "8 Affordable Ways to Implement an AI Strategy",
    link: "https://www.netguru.com/blog/8-affordable-ways-to-implement-an-ai-strategy",
    image:
      "https://www.netguru.com/hs-fs/hubfs/Two%20creative%20millenial%20small%20business%20owners%20working%20on%20social%20media%20strategy%20brainstorming%20using%20adhesive%20notes%20in%20windows-1.jpeg?width=1535&height=1024",
  },
  {
    title: "How to Scale Product Teams Effectively",
    link: "https://www.netguru.com/blog/how-to-scale-product-teams-effectively",
    image:
      "https://www.netguru.com/hs-fs/hubfs/Krak%C3%B3w%20Hub%20photoshoot%202022/Krak%C3%B3w%20Hub%20photoshoot%202022_2544.jpg?width=720&height=480&name=Krak%C3%B3w%20Hub%20photoshoot%202022_2544.jpg",
  },
  {
    title: "Does AI Wear Sneakers? Adidas’ Journey with AI",
    link: "https://open.spotify.com/episode/4k8AfdpnCFrK38pWSuX04Y",
    image:
      "https://www.netguru.com/hs-fs/hubfs/DT%20wDavid.png?width=720&height=405&name=DT%20wDavid.png"
  },
];

const Insights = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-10">
        <h2 className="text-2xl font-medium leading-snug text-gray-900 max-w-xl">
          Explore insights for{" "}
          <span className="relative inline-block font-bold">
            <span className="bg-green-200 rounded-full px-2 py-0.5">
              acceleration
            </span>
          </span>
        </h2>
        <a
          href="https://www.netguru.com/blog"
          className="text-green-600 underline text-sm"
        >
          More disruptive insights
        </a>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                Blog
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {item.title}
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
