const teams = ["Mercedes", "Ferrari", "Red Bull", "McLaren", "Aston Martin"];
const drivers = ["Lewis Hamilton", "Max Verstappen", "Lando Norris", "Charles Leclerc", "Fernando Alonso"];

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome to RaceHub</h1>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Pick your favorites, then head to Learn for fundamentals and Play for quick motorsport challenges.
        </p>
      </div>

      <form className="card grid gap-4 sm:grid-cols-2" aria-label="Favorites form">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Favorite Team
          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" defaultValue="">
            <option value="" disabled>
              Select a team
            </option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Favorite Driver
          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" defaultValue="">
            <option value="" disabled>
              Select a driver
            </option>
            {drivers.map((driver) => (
              <option key={driver} value={driver}>
                {driver}
              </option>
            ))}
          </select>
        </label>
      </form>
    </section>
  );
}
