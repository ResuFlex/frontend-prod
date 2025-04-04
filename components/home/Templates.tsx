const Templates = () => {
  return (
    <section className="bg-primary-500 py-16">
      <div className="container mx-auto max-w-5xl border-1 border-border-500 p-4 rounded-lg">
        <span className="text-theme-500 text-md">High ranking Templates</span>
        <p className="text-white text-5xl pt-4 max-w-md">
          Select a template that matches your job application
        </p>
        <button className="border-1 border-border-500 rounded-3xl bg-border-600 mt-6 text-white px-4 py-2 text-sm">
          Explore Templates
        </button>
        <div className="mt-40 flex flex-col gap-4">
          <div>
            <span className="text-md text-light-500 block font-medium">
              Interactive Templates
            </span>
            <span className="text-sm text-light-600 block max-w-xs">
              Remotely access the office network, cloud VPCs, and other private
              resources.
            </span>
          </div>
          <div>
            <span className="text-md text-light-500 block font-medium">
              Interactive Templates
            </span>
            <span className="text-sm text-light-600 block max-w-xs">
              Remotely access the office network, cloud VPCs, and other private
              resources.
            </span>
          </div>
          <div>
            <span className="text-md text-light-500 block font-medium">
              Interactive Templates
            </span>
            <span className="text-sm text-light-600 block max-w-xs">
              Remotely access the office network, cloud VPCs, and other private
              resources.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Templates };
