const ColorsShow = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-backgroundColor bg-opacity-50 text-typography">
      <div className="flex w-7/8">
        <div className="min-w-full min-h-6 bg-primary text-typography">
          Primary
        </div>
        <div className="min-w-full min-h-6 bg-secondary text-typography">
          Secondary
        </div>
        <div className="min-w-full min-h-6 bg-buttons text-buttonText">
          Buttons
        </div>
        <div className="min-w-full min-h-6 bg-accent text-typography">
          Accent
        </div>
      </div>
    </section>
  );
};

export default ColorsShow;
