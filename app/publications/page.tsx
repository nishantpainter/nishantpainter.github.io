import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Publication | Nishant Painter",
  description: "Conference papers by Nishant Painter",
};

export default function Page() {
  return (
    <section className="publication">
      <div className="content">
        <h1>Publications</h1>
        <ul>
          <li>
            <h3>
              Machine-Learning-Based Android Malware Detection Techniques—A
              Comparative Analysis
            </h3>
            <Image
              height={200}
              width={135}
              src="/img/springer-information-and-communication-technology-for-sustainable-development.jpg"
              alt="Information and Communication Technology for Sustainable Development"
            />
            <p>
              Today, Smartphones can handle myriad of programs and applications
              that perform a wide varieties of functions. In recent years,
              Android has been a globally anticipated open source operating
              system for Smartphones. However, rapid advancement of Android is
              marred with augmenting threats of Android malwares that perform
              pernicious activities on Smartphones. Malwares exercising
              different techniques to dodge existing detection methods offer
              uncommon challenges for their accurate detection. Signature-based
              detection approach and machine-learning-based detection approach
              are the broad classifications for existing Android malware
              detection techniques. Researchers and antimalware companies have
              identified the inefficiency of signature-based detection approach
              and shifted to machine-learning-based detection approach to
              overcome the limitations of signature-based detection approach.
              This paper disserts existing machine-learning-based Android
              malware detection techniques and presents parametric comparison of
              discussed malware detection techniques. Hence, this paper targets
              to study various machine-learning-based detection techniques and
              to establish probable future directions.
            </p>
            <a
              className="btn-primary"
              href="https://link.springer.com/chapter/10.1007/978-981-10-3932-4_19"
              target="_blank"
            >
              See Publication
            </a>
          </li>

          <li>
            <h3>
              Comparative Analysis of Android Malware Detection Techniques
            </h3>
            <Image
              height={200}
              width={135}
              src="/img/springer-proceedings-of-the-international-conference-on-data-engineering-and-communication-technology.jpg"
              alt="Information and Communication Technology for Sustainable Development"
            />
            <p>
              In recent years, the widespread adoption of smartphones has led to
              a new age of information exchange. Among smartphones, Android
              devices have gained huge popularity due to the open architecture
              of Android and advanced programmable software framework to develop
              mobile applications. However, the pervasive adoption of Android is
              coupled with progressively uncontrollable malware threats. This
              paper gives an insight of existing work in Android malware
              detection. Additionally, this paper highlights the parametric
              comparison of existing Android malware detection techniques. Thus,
              this paper aims to study various Android malware detection
              techniques and to identify plausible research direction.
            </p>
            <a
              className="btn-primary"
              href="https://link.springer.com/book/10.1007/978-981-10-1678-3"
              target="_blank"
            >
              See Publication
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
