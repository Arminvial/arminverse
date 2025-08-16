"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Phone, Mail } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* تصویر و نام */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/profilepic.JPEG"
            alt="Armin Gholipour"
            width={140}
            height={140}
            className="rounded-full border-4 border-purple-600"
          />
          <h1 className="text-3xl font-bold text-purple-400">
            Armin Gholipour
          </h1>
          <p className="text-zinc-400">
            Full-Stack Developer | React.js, Next.js, Node.js
          </p>
        </div>

        {/* اطلاعات تماس و لینک‌ها */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-zinc-300">
          <a
            href="tel:09129370681"
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <Phone size={16} /> 09129370681
          </a>
          <a
            href="mailto:roybaranarmin@gmail.com"
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <Mail size={16} /> roybaranarmin@gmail.com
          </a>
          <Link
            href="https://github.com/Arminvial"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <Github size={16} /> GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/armin-gholipour-92231623b"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <Linkedin size={16} /> LinkedIn
          </Link>
        </div>

        {/* درباره من */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            About Me
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            برنامه‌نویس وب با تسلط کامل به JavaScript و فریموورک و لایبری های
            مرتبط مانند React.js و Next.js. بیش از ۵ سال تجربه در پروژه‌های
            متنوع، آشنا به Node.js، سئو، گیت و مفاهیم SSR/CSR/ISR. متعهد،
            تیم‌محور و علاقه‌مند به حل چالش‌های فنی و یادگیری مداوم.
          </p>
        </section>

        {/* مهارت‌ها */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            Technical Skills
          </h2>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>JavaScript(ES6+), HTML5, CSS3, TypeScript</li>
            <li>React.js, Next.js, Node.js, Tailwind, Bootstrap</li>
            <li>MongoDB, Express.js, REST API, Redux, NextAuth.js</li>
            <li>WordPress, SEO, Vercel, Postman, Git, Jest, ui libraries</li>
          </ul>
        </section>

        {/* تحصیلات */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            Education
          </h2>
          <p className="text-zinc-300">
            Bachelor in Banking Management - Tehran South University (2019 -
            2024)
          </p>
        </section>

        {/* سوابق شغلی */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            Work Experience
          </h2>
          <ul className="space-y-2 text-zinc-300">
            <li>
              <b>Front-End Developer and Suppor</b> – ipinit
              (2025)
            </li>
            <li>
              <b>Front-End Developer and Suppor</b> – iranarmaghan
              (2025)
            </li>

            <li>
              <b>Internal Manager & Web Developer</b> – Forouhar Pars Fanavar
              (2024)
            </li>
            <li>
              <b>Internal Manager & Web Developer</b> – Alrahi, Dubai (2023)
            </li>
            <li>
              <b>Frontend Developer</b> – Bilin College, Allameh University
              (2022)
            </li>
            <li>
              <b>WordPress Developer</b> – SalixWood company, Tasisat Abzar
              (2023)
            </li>
            <li>
              <b>English Translator</b> – Vista Tejarat Soud (2019–2021)
            </li>
          </ul>
        </section>

        {/* زبان‌ها */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            Languages
          </h2>
          <ul className="text-zinc-300 list-disc pl-6">
            <li>English: Advanced</li>
            <li>Italian: Intermediate</li>
            <li>Turkish: Intermediate</li>
          </ul>
        </section>

        {/* دوره‌ها */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            Courses
          </h2>
          <p className="text-zinc-300">
            Maktabkhooneh, Coursera, Toplearn, SoloLearn, W3Schools, Academy of
            Hesam Moosavi
          </p>
        </section>

        {/* فعالیت‌های داوطلبانه */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            Voluntary Activities
          </h2>
          <p className="text-zinc-300">
            مشارکت در Stack Overflow، اصلاح پروژه‌ها و تعامل در انجمن‌های
            برنامه‌نویسی
          </p>
        </section>

        {/* مقالات */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-2">
            Articles & Publications
          </h2>
          <ul className="text-zinc-300 list-disc pl-6">
            <li>
              <Link
                href="https://medium.com/@roybaranarmin/how-to-build-a-login-system-in-next-js-using-nextauth-js-app-router-270cacba2279"
                target="_blank"
                className="hover:text-purple-400"
              >
                آموزش احراز هویت با NextAuth.js در Next.js
              </Link>
            </li>
            <li>
              <Link
                href="https://vrgl.ir/Wx68A"
                target="_blank"
                className="hover:text-purple-400"
              >
                جاوااسکریپت از کجا شروع شد و چطوری دنیا رو تغییر داد؟
              </Link>
            </li>
            <li>تحلیل و بررسی کتاب Eloquent JavaScript - نسخه سوم</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
