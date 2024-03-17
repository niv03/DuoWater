interface SectionTitleProps {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  className?: string; // Include the className type
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  className, // Include className in the destructuring
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""} ${className}`} // Apply className here
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
