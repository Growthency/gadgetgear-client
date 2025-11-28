const Stats = () => {
  return (
    <div className="py-12 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat text-center">
            <div className="stat-title">Downloads</div>
            <div className="stat-value text-primary">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat text-center">
            <div className="stat-title">New Users</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat text-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
