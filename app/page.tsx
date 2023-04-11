import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--teko-font",
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-24 main-bg ">
      <div className={`title-text text-center ${teko.variable}`}>
        ASTEROID CITY
      </div>
      <p className="pt-0 w-2/4 text-justify mx-auto text-zinc-600">
        Asteroid City is an upcoming American science fiction romantic comedy
        drama film written, directed and co-produced by Wes Anderson, based on a
        story by Anderson and Roman Coppola. The film follows the transformative
        events that occur at an annual Junior Stargazer convention in 1955. It
        features a large ensemble cast that includes Jason Schwartzman, Scarlett
        Johansson, Tom Hanks, Jeffrey Wright, Tilda Swinton, Bryan Cranston,
        Edward Norton, Adrien Brody, Liev Schreiber, Hope Davis, Steve Park,
        Rupert Friend, Maya Hawke, Steve Carell, Matt Dillon, Hong Chau, Willem
        Dafoe, Margot Robbie, Tony Revolori, Jake Ryan, and Jeff Goldblum.
      </p>
    </main>
  );
}
