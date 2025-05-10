export const CertificateSection = () => {
  const certificates = [
    {
      title: "AIU Football 2022",
      link: "https://drive.google.com/file/d/1tknRuV-X_4U6h_22mcBlgVhkmpq0zvjq/view?usp=sharing",
    },
    {
      title: "AIU Football 2023",
      link: "https://drive.google.com/file/d/1tljkW_CT2uujaSXV4-zZoZ-4ektAJFi8/view?usp=sharing",
    },
    {
      title: "IRCS Certification",
      link: "https://drive.google.com/file/d/1to4htEzFd_nuEcN9Ea4RYB6HFPs9oe5t/view?usp=sharing",
    },
    {
      title: "NCC B-Certificate",
      link: "https://drive.google.com/file/d/1tfYW-eBQDMXzjXooe7k8s-UD4oS7pSPR/view?usp=sharing",
    },
  ];

  return (
    <section id="certificates" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 card-hover"
            >
              <h4 className="font-semibold text-lg mb-2 text-primary">
                {cert.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                Click to view certificate
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
