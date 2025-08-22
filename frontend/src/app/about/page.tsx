import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/church-bg.jpg"
          alt="Église"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            À Propos de Notre Église
          </h1>
          <p className="mt-4 text-lg md:text-xl text-yellow-300">
            Histoire • Mission • Vision
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">
          Notre Histoire
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum qui maiores neque soluta tempora, ab itaque sit consectetur possimus excepturi deleniti quis earum aliquid cum molestias necessitatibus saepe sapiente impedit expedita illum deserunt quasi commodi? Nemo neque iure pariatur quae voluptatem aliquid unde natus perspiciatis eum ullam repellat, minus, veritatis doloribus, accusamus ducimus hic voluptatum ea similique repellendus. Repellendus veritatis magnam natus adipisci ea a reprehenderit molestiae odio nemo, inventore architecto dignissimos saepe? Dolor in quae mollitia maxime quaerat dolorum reprehenderit molestiae maiores tenetur obcaecati, officiis non, est recusandae itaque blanditiis vel voluptate ipsam, corporis quis deserunt! Quam, quos odio!
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime culpa quae quod magnam soluta cumque tenetur assumenda blanditiis doloremque recusandae necessitatibus, nisi similique iure optio laudantium et mollitia ab qui! Corporis, consequuntur! Doloremque nisi aspernatur itaque distinctio quos reiciendis fuga natus neque fugiat exercitationem quidem debitis, tenetur eius ad unde temporibus aut? Quasi ipsam voluptatum consequuntur dolorum soluta aliquid neque, repellendus quo. Dolores officiis molestias quos eius maiores odio quo atque! Animi, vitae eligendi. Reprehenderit laborum itaque dolor maiores.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi saepe dolore quibusdam aliquid magnam natus obcaecati accusantium commodi eaque architecto suscipit nam asperiores accusamus neque rerum placeat quisquam praesentium earum facilis blanditiis? Sed nemo quaerat aspernatur incidunt mollitia repellendus natus pariatur necessitatibus voluptatibus amet unde non nulla quod accusamus laboriosam qui, in animi voluptatem perferendis hic iusto placeat quidem corrupti doloremque. Culpa, ad voluptates at id, necessitatibus repellendus earum mollitia consequatur repudiandae libero saepe accusamus, iure consectetur esse adipisci.
            </p>
          </div>
        </div>
      </section>

      {/* Autres infos */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">
          Compléments d’Informations
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>Localisation : Lorem ipsum dolor sit amet.</li>
          <li>Activités principales : Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>
    </main>
  );
}
