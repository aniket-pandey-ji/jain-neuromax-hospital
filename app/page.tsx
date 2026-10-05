"use client";

import { useState } from "react";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartPulse,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";

const doctors = [
  ["Dr. Navneet Kala", "Neurosurgery", "MBBS, MS General Surgery, MCh Neurosurgery"],
  ["Dr. Madhuri Jain", "Dentistry", "BDS"],
  ["Dr. Subhankit Aarya", "General Medicine", "MD Medicine"],
  ["Dr. Naveen Singh", "Pediatrics", "MD Pediatrics"],
  ["Dr. Shoolpani Mishra", "Gastroenterology", "MBBS, MD Medicine, DM Gastroenterology"],
  ["Dr. Kunal Singh", "Cardiology", "DM Cardiology"],
  ["Dr. Rishab Tripathi", "Orthopaedics", "MBBS, DNB"],
  ["Dr. Essar Khan", "Nephrology", "MBBS, MD, DM Nephrology"],
  ["Dr. Ravi Prakash Mishra", "Urology", "MBBS, DNB General Surgery, MNAMS, MCh Urology"],
  ["Dr. Durgesh Tripathi", "General & Laparoscopic Surgery", "MBBS, MS General Surgery"],
  ["Dr. Avishesh Singh", "Cardiology", "MBBS, MD Medicine, DM Cardiology"],
  ["Dr. Shivam Pandey", "Pulmonology", "MD Chest"],
  ["Dr. Anamika Modi", "Obstetrics & Gynaecology", "MBBS, DGO"],
  ["Dr. Nitya Nand", "Plastic & Reconstructive Surgery", "MBBS, MS General Surgery, MCh Plastic Surgery"],
  ["Dr. Ankit Modi", "Urology", "MBBS, MS General Surgery, MCh Urology, FMAS"],
  ["Dr. Prashant Thakur", "Consultant", "Profile information coming soon"],
  ["Dr. Pritesh Yadav", "Consultant", "Profile information coming soon"],
  ["Dr. Shreya Raj", "Consultant", "Profile information coming soon"],
  ["Dr. DeeraJ Singh", "Consultant", "Profile information coming soon"],
  ["Dr. Rishab Tripathi", "Orthopaedics", "MBBS, DNB"],
  ["Dr. Satya Prakash", "Consultant", "Profile information coming soon"],
  ["Dr. Avishesh Singh", "Cardiology", "MBBS, MD Medicine, DM Cardiology"],
  ["Dr. Shashank", "Consultant", "Profile information coming soon"],
  ["Dr. Shivam Pandey", "Pulmonology", "MD Chest"],
  ["Dr. Vaibhav Shahi", "Consultant", "Profile information coming soon"],
];

const specialties = [
  ["Neurosurgery", "Advanced specialist care for brain, spine and neurological surgical conditions.", Brain],
  ["Neurology", "Specialist neurological consultation and patient-focused medical care.", HeartPulse],
  ["Cardiology", "Specialist cardiovascular consultation and heart care.", HeartPulse],
  ["Gastroenterology", "Specialist care for digestive and gastrointestinal conditions.", Stethoscope],
  ["Nephrology", "Specialist kidney care and medical management.", ShieldCheck],
  ["Urology", "Specialist diagnosis and treatment of urological conditions.", Stethoscope],
  ["Orthopaedics", "Specialist care for bones, joints and musculoskeletal conditions.", Stethoscope],
  ["Pulmonology", "Specialist respiratory and chest-related medical care.", HeartPulse],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(([name, speciality]) =>
    `${name} ${speciality}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#171717]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 md:px-8">

          <a href="#" className="leading-none">
            <div className="text-xl font-black tracking-[-0.05em]">
              JAIN NEUROMAX
            </div>
            <div className="mt-1 text-[9px] font-bold tracking-[0.3em] text-[#9a6847]">
              HOSPITAL
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {["About", "Doctors", "Specialities", "Services", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-black/60 transition hover:text-black"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm font-semibold"
            >
              <Phone size={15} />
              Call Hospital
            </a>

            <a
              href="#appointment"
              className="rounded-full bg-[#242424] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setMenu(!menu)}
            className="rounded-xl border border-black/10 p-2.5 lg:hidden"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {menu && (
          <div className="border-t border-black/10 bg-white px-5 py-5 lg:hidden">
            {["About", "Doctors", "Specialities", "Services", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenu(false)}
                  className="block border-b border-black/5 py-4 font-semibold"
                >
                  {item}
                </a>
              )
            )}

            <a
              href="#appointment"
              className="mt-4 block rounded-full bg-[#242424] px-5 py-3 text-center font-bold text-white"
            >
              Book Appointment
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#242424] text-white">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.9fr_1.1fr]">

          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-12 lg:py-28">
            <p className="text-xs font-bold tracking-[0.28em] text-[#c28a62]">
              ADVANCED SPECIALIST CARE
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Expert Care.
              <br />
              Advanced Medicine.
              <br />
              <span className="text-[#c28a62]">
                Trusted Specialists.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg">
              Jain Neuromax Hospital brings together specialist medical
              expertise, modern healthcare infrastructure and a
              patient-focused approach to care.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#appointment"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#242424]"
              >
                Book an Appointment
                <ArrowRight size={17} />
              </a>

              <a
                href="#doctors"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-bold"
              >
                Find a Doctor
                <ChevronRight size={17} />
              </a>
            </div>
          </div>

          {/* HOSPITAL IMAGE PLACEHOLDER */}
          <div className="relative min-h-[460px] overflow-hidden bg-gradient-to-br from-[#6e4b38] via-[#303030] to-[#101010] lg:min-h-[680px]">

            <div className="absolute inset-0 opacity-40">
              <div className="absolute right-[-100px] top-[-80px] h-[500px] w-[500px] rounded-full border-[80px] border-[#c28a62]/20" />
              <div className="absolute bottom-[-120px] left-[-100px] h-[400px] w-[400px] rounded-full border-[60px] border-white/10" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                  <Stethoscope size={36} className="text-[#c28a62]" />
                </div>

                <p className="mt-6 text-xs font-bold tracking-[0.25em] text-white/40">
                  JAIN NEUROMAX HOSPITAL
                </p>

                <p className="mt-3 text-2xl font-bold">
                  Your Hospital Photograph
                </p>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/40">
                  Replace this visual with the actual hospital exterior
                  photograph.
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/15 bg-black/30 p-5 backdrop-blur-xl">
              <p className="text-xs font-bold tracking-[0.18em] text-white/40">
                HOSPITAL
              </p>
              <p className="mt-1 text-lg font-bold">
                Jain Neuromax Hospital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">

          {[
            ["15+", "Specialists listed"],
            ["15", "Speciality profiles"],
            ["100%", "Patient focused"],
            ["24/7", "Emergency-ready design"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-black/5 px-5 py-7 last:border-0 md:px-8"
            >
              <div className="text-3xl font-black">{value}</div>
              <div className="mt-1 text-sm text-black/45">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:px-12"
      >
        <div className="relative min-h-[430px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#d7c5b6] via-[#8b6953] to-[#242424]">

          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,.12)_45%,rgba(255,255,255,.12)_47%,transparent_47%)]" />

          <div className="absolute bottom-7 left-7 rounded-2xl bg-black/30 p-5 text-white backdrop-blur-md">
            <p className="text-xs tracking-[0.2em] text-white/50">
              JAIN NEUROMAX
            </p>
            <p className="mt-1 text-xl font-bold">Specialist Healthcare</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">

          <p className="text-xs font-bold tracking-[0.25em] text-[#9a6847]">
            ABOUT JAIN NEUROMAX
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            Healthcare designed around people.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-black/55">
            A modern hospital experience built around specialist expertise,
            accessible medical care and a patient-first approach.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Specialist-led care",
              "Patient-first experience",
              "Modern clinical environment",
              "Easy appointment access",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4"
              >
                <CheckCircle2 size={18} className="text-[#9a6847]" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAIN & SPINE */}
      <section className="bg-[#242424] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">

          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#c28a62]">
              SPECIALIST FOCUS
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-7xl">
              Brain
              <br />
              & Spine.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-white/50">
              A specialist-focused approach to neurological and spine-related
              healthcare.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Neurology", "Specialist neurological consultation and care."],
              ["Neurosurgery", "Specialist surgical care for neurological conditions."],
              ["Spine Care", "Specialist evaluation of spine-related concerns."],
              ["Expert Consultation", "Connect with the appropriate specialist."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-[25px] border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c28a62]/15 text-[#c28a62]">
                  <Brain size={22} />
                </div>

                <h3 className="mt-7 text-xl font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALITIES */}
      <section
        id="specialities"
        className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28 lg:px-12"
      >

        <p className="text-xs font-bold tracking-[0.25em] text-[#9a6847]">
          SPECIALITIES
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-5xl">
          Specialist care across critical medical needs.
        </h2>

        <p className="mt-5 max-w-2xl text-black/50">
          Explore specialist departments and medical disciplines represented
          across the hospital's current doctor directory.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map(([title, description, Icon]) => {
            const CurrentIcon = Icon as typeof Brain;

            return (
              <article
                key={title as string}
                className="group rounded-[25px] border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9a6847]/10 text-[#9a6847]">
                  <CurrentIcon size={22} />
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {title as string}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/45">
                  {description as string}
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm font-bold">
                  Explore
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28 lg:px-12">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#9a6847]">
                OUR SPECIALISTS
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Meet our doctors.
              </h2>

              <p className="mt-5 max-w-xl text-black/50">
                Find specialists by doctor name or medical speciality.
              </p>
            </div>

            <div className="relative w-full lg:w-[380px]">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctors..."
                className="w-full rounded-full border border-black/10 bg-[#f7f5f2] py-4 pl-11 pr-5 text-sm outline-none focus:border-[#9a6847]"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.slice(0, 9).map(([name, speciality, qualification]) => (
              <article
                key={`${name}-${speciality}`}
                className="group overflow-hidden rounded-[25px] border border-black/5 bg-[#f7f5f2] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#e8e0d8] to-[#c9c1ba]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-white/70 bg-[#242424] text-white shadow-lg">
                    <Stethoscope size={30} />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#9a6847]">
                    CONSULTANT
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-black/65">
                    {speciality}
                  </p>

                  <p className="mt-2 min-h-[40px] text-xs leading-5 text-black/40">
                    {qualification}
                  </p>

                  <button className="mt-5 flex items-center gap-2 text-sm font-bold">
                    View Profile
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="rounded-full border border-black/10 px-7 py-3.5 text-sm font-bold transition hover:bg-[#242424] hover:text-white">
              View All Doctors
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28 lg:px-12"
      >

        <p className="text-xs font-bold tracking-[0.25em] text-[#9a6847]">
          PATIENT EXPERIENCE
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-5xl">
          From finding a specialist to your appointment — made simpler.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            ["01", "Find Your Doctor", Search],
            ["02", "Choose Your Speciality", Stethoscope],
            ["03", "Book Appointment", CalendarDays],
            ["04", "Continue Your Care", HeartPulse],
          ].map(([number, title, Icon]) => {
            const CurrentIcon = Icon as typeof Search;

            return (
              <div
                key={number as string}
                className="rounded-[25px] border border-black/5 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-[0.2em] text-[#9a6847]">
                    {number as string}
                  </span>

                  <CurrentIcon size={21} className="text-black/35" />
                </div>

                <h3 className="mt-12 text-xl font-bold">
                  {title as string}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="bg-[#9a6847] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:px-12">

          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-white/55">
              APPOINTMENT
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-6xl">
              Ready to speak with a specialist?
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/65">
              Find the appropriate doctor and take the next step toward
              specialist consultation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#242424]">
                Book Appointment
                <ArrowRight size={17} />
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-4 text-sm font-bold">
                <Phone size={17} />
                Call Hospital
              </button>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#242424] p-7">
            <div className="flex items-center gap-3">
              <Clock3 size={21} className="text-[#c28a62]" />
              <span className="font-bold">Patient Support</span>
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Emergency", "Verified emergency contact will be added."],
                ["Appointments", "Connect with the appropriate specialist."],
                ["Patient Care", "Clear information before every visit."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <p className="text-xs font-bold tracking-[0.18em] text-white/35">
                    {title.toUpperCase()}
                  </p>
                  <p className="mt-2 text-sm text-white/55">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28 lg:px-12"
      >
        <div className="rounded-[30px] bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,0.06)] md:p-10">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#9a6847]">
                VISIT US
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                Jain Neuromax Hospital
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/50">
                Hospital address, verified phone number and map location will
                be connected here before production launch.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-2xl bg-[#f7f5f2] p-5">
                  <p className="text-xs font-bold tracking-[0.18em] text-black/30">
                    ADDRESS
                  </p>
                  <p className="mt-2 font-semibold">
                    Verified address to be added
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f5f2] p-5">
                  <p className="text-xs font-bold tracking-[0.18em] text-black/30">
                    CONTACT
                  </p>
                  <p className="mt-2 font-semibold">
                    Verified contact to be added
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[350px] items-center justify-center rounded-[25px] bg-[#242424] text-center text-white">
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c28a62]/15 text-[#c28a62]">
                  <ChevronRight size={25} />
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Hospital Location
                </h3>

                <p className="mx-auto mt-3 max-w-sm px-6 text-sm leading-6 text-white/40">
                  Connect the verified Google Maps location here.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#181818] pb-24 text-white md:pb-10">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div>
              <div className="text-xl font-black tracking-[-0.05em]">
                JAIN NEUROMAX
              </div>

              <div className="mt-1 text-[9px] font-bold tracking-[0.3em] text-[#c28a62]">
                HOSPITAL
              </div>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
                Specialist healthcare with experienced doctors, modern
                infrastructure and a patient-first experience.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">QUICK LINKS</h3>

              <div className="mt-5 space-y-3 text-sm text-white/40">
                <a href="#about" className="block hover:text-white">About</a>
                <a href="#doctors" className="block hover:text-white">Doctors</a>
                <a href="#specialities" className="block hover:text-white">Specialities</a>
                <a href="#services" className="block hover:text-white">Services</a>
                <a href="#contact" className="block hover:text-white">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">SPECIALITIES</h3>

              <div className="mt-5 space-y-3 text-sm text-white/40">
                <span className="block">Neurosurgery</span>
                <span className="block">Neurology</span>
                <span className="block">Cardiology</span>
                <span className="block">Gastroenterology</span>
                <span className="block">Nephrology</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">PATIENTS</h3>

              <div className="mt-5 space-y-3 text-sm text-white/40">
                <a href="#appointment" className="block hover:text-white">
                  Book Appointment
                </a>
                <a href="#doctors" className="block hover:text-white">
                  Find a Doctor
                </a>
                <a href="#contact" className="block hover:text-white">
                  Contact Hospital
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/25">
            © {new Date().getFullYear()} Jain Neuromax Hospital. All rights reserved.
          </div>
        </div>
      </footer>

      {/* MOBILE ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-black/10 bg-white/95 backdrop-blur-xl md:hidden">

        <a
          href="#"
          className="flex flex-col items-center gap-1 py-3 text-[10px] font-bold"
        >
          <Phone size={17} />
          Emergency
        </a>

        <a
          href="#doctors"
          className="flex flex-col items-center gap-1 border-x border-black/5 py-3 text-[10px] font-bold"
        >
          <Stethoscope size={17} />
          Doctors
        </a>

        <a
          href="#appointment"
          className="flex flex-col items-center gap-1 bg-[#242424] py-3 text-[10px] font-bold text-white"
        >
          <CalendarDays size={17} />
          Appointment
        </a>

      </div>
    </main>
  );
}
