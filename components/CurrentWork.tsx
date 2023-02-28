import {
  email,
  foyerUrl,
  frcUrl,
  githubUrl,
  team5940Url,
  tripleyUrl,
  youtubeUrl,
} from "@/utils/links";
import { Link } from "./Link";

export const CurrentWork = () => {
  return (
    <section className="rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-primary-extraLight">
        currently, i'm
      </h2>
      <p className="mb-5">
        Working as a product engineer at{" "}
        <Link
          type="color"
          className="text-foyerPurple"
          href={foyerUrl}
          displayName="Foyer"
        />
        , helping maximize the performance of engineering teams.
      </p>

      <p className="mb-5">
        Building{" "}
        <Link
          type="color"
          className="text-tripleyBlue"
          href={tripleyUrl}
          displayName="Tripley"
        />
        , a mobile app that enables travelers to plan and manage their trips
        effectively.
      </p>

      <p className="mb-5">
        Creating content on my YouTube channel called{" "}
        <Link type="basic" href={youtubeUrl} displayName="EternalProgramming" />
        , where I talk about and teach tech
      </p>
      <p className="mb-5">
        Technical team member in{" "}
        <Link
          type="basic"
          href={frcUrl}
          displayName="First Robotics Competition"
        />{" "}
        <Link
          type="color"
          className="text-team5940Red underline"
          href={team5940Url}
          displayName="Team 5940"
        />
        , in the software sub-team
      </p>
    </section>
  );
};
