import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="intro">
      <h1>
        Nishant&nbsp;<span>Painter</span>
      </h1>
      <p>Computer Programmer&nbsp;💻🕹️☯️</p>
      <div className="social">
        <a
          title="Github"
          href="https://github.com/nishantpainter"
          target="_blank"
        >
          <Image
            height={24}
            width={30}
            alt="Image for social site github"
            src="/img/github.svg"
          />
        </a>
        <a
          title="Linkedin"
          href="https://in.linkedin.com/in/nishant-painter-31388582"
          target="_blank"
        >
          <Image
            height={24}
            width={30}
            alt="Image for social site linkedin"
            src="/img/linkedin.svg"
          />
        </a>
        <a
          title="Stackoverflow"
          href="https://stackoverflow.com/users/13841339/nishant-painter"
          target="_blank"
        >
          <Image
            height={24}
            width={30}
            alt="Image for social site stackoverflow"
            src="/img/so.svg"
          />
        </a>
        <a
          title="Medium"
          href="https://medium.com/@nishantpainter"
          target="_blank"
        >
          <Image
            height={24}
            width={30}
            alt="Image for social site medium"
            src="/img/medium.svg"
          />
        </a>
      </div>
      <div className="navigation">
        <nav>
          <Link href="/publications" className="btn-primary">
            Publications
          </Link>
        </nav>
      </div>
    </section>
  );
}
