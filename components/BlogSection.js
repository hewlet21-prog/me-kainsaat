import { siteConfig } from '@/lib/site'

const posts = [
  {
    title: 'Erzurum beton ve agrega tedariginde planlama neden belirleyici?',
    text: 'Erzurum beton ve agrega sahalarinda asil farki; malzeme akisinin duzgun kurulmasi, stok alaninin verimli kullanilmasi ve sevkiyat ritminin imalat programina gore ayarlanmasi yaratir.',
  },
  {
    title: 'Erzurum hafriyat ve yol yapiminda kontrollu saha yonetimi',
    text: 'Hafriyat, dolgu, platform ve asfalt uygulamalarinda makine plani ile trafik guvenligini ayni anda dusunmek gerekir. ME-KA Insaat bu dengeyi saha koordinasyonuyla kurar.',
  },
  {
    title: 'Erzurum tunel, dere islahi ve tas islerinde kritik basliklar',
    text: 'Tunel islerinde destekleme, dere islahinda akis guvenligi, tas islerinde ise zemin ve drenaj kararlari sonuc kalitesini belirler. Her kalem icin farkli bir saha refleksi gerekir.',
  },
  {
    title: 'Kerim Memis koordinasyonunda ihale sonrasi saha kurulumu',
    text: 'Ihale sonrasi hizli saha kurulumu, ekipman yerlesimi, beton-agrega tedarigi ve uygulama takibi buyuk altyapi islerinde teslim disiplinini guclendirir.',
  },
]

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="container-custom">
        <div className="premium-panel px-5 py-7 sm:px-7 md:px-9">
          <span className="section-kicker">Blog / Icerik</span>
          <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-white md:text-4xl">Erzurum odakli saha notlari ve kisa icerikler</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-300 md:text-base">
            Erzurum beton, hafriyat, agrega, demir, ihale, tunel, yol yapimi ve altyapi sureclerine dair arama odakli ama sahaya dayanan kisa icerikler.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {posts.map((post) => (
              <article key={post.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-black text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{post.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.seoKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-200">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
