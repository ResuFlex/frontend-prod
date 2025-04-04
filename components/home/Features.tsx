import { FeatureBox } from "./FeatureBox";

const Features = () => {
  return (
    <section className="bg-primary-500 py-16">
        <h2 className="text-white text-4xl text-center mb-10">Get hired fast with a powerful resume</h2>
        <div className="flex gap-6 container mx-auto flex-wrap">
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
        </div>
    </section>
  );
};

export { Features };