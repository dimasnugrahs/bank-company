import React from "react";

const DirectorProfile = () => {
  const profiles = [
    {
      href: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Eugene Ken",
      position: "Komisaris Utama",
      quote: "Kepercayaan Anda adalah Tanggung Jawab Kami.",
    },
    {
      href: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ed Chauncey",
      position: "Komisaris",
      quote: "Kepercayaan Anda adalah Tanggung Jawab Kami.",
    },
    {
      href: "https://images.unsplash.com/photo-1529232356377-57971f020a94?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Camellia Elaine",
      position: "Direktur Utama",
      quote: "Kepercayaan Anda adalah Tanggung Jawab Kami.",
    },
    {
      href: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Demelza Topsy",
      position: "Direktur",
      quote: "Kepercayaan Anda adalah Tanggung Jawab Kami.",
    },
  ];
  return (
    <div className="px-6 pt-10 pb-24 ">
      <div className="mx-auto max-w-6xl ">
        <h2 className="text-center font-display text-2xl  font-bold tracking-tight text-slate-900 md:text-2xl">
          Profil Pimpinan
        </h2>
        <ul className="mt-8 text-center px-10 grid grid-cols-1 gap-6 text-slate-700 lg:grid-cols-4">
          {profiles.map((profile, key) => (
            <li
              key={key}
              className="rounded-xl bg-white px-4 py-4 shadow-sm hover:shadow-lg border"
            >
              <div className="group">
                <img
                  src={profile.href}
                  alt=""
                  className="h-72 w-full object-cover rounded-md"
                />
                <h3 className="mt-3 font-display font-medium group-hover:text-primary-500 px-4">
                  {profile.name}
                </h3>
                <p className="mb-4 text-sm leading-6 text-secondary-500 px-4">
                  {profile.position}
                </p>
                <p className="mt-1.5 mb-4 text-sm leading-6 text-secondary-500 italic px-4">
                  {profile.quote}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DirectorProfile;
