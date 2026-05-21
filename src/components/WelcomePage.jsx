import { useState } from "react"

export default function WelcomePage() {
  const [activeTab, setActiveTab] = useState("about")
  const tabs = [
    { key: "about", label: "О себе" },
    { key: "skills", label: "Компетенции" },
    { key: "projects", label: "Проекты" },
    { key: "education", label: "Образование" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <header className="bg-gray-900 border-b border-gray-800 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">LeadForge</h1>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400 text-sm">Владислав Д. — AI-архитектор</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="text-center mb-16">
            <img src="/avatar.jpg" alt="Владислав Д." className="w-24 h-24 rounded-full object-cover mx-auto mb-6 shadow-2xl shadow-blue-500/20 border-2 border-gray-700" />
            <h2 className="text-4xl font-bold mb-3">Владислав Д.</h2>
            <p className="text-xl text-gray-400 font-light">AI-архитектор, Data Engineer, Full-stack разработчик</p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              AI-архитектор и data-driven разработчик с фундаментальным университетским образованием 
              (Прикладная Информатика, профиль «Управление данными»). Сочетаю системный подход к работе 
              с данными и активное внедрение AI-инструментов.
            </p>
            <div className="mt-6 bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-2xl mx-auto text-left">
              <p className="text-gray-300 italic leading-relaxed">
                «Не просто писать код, а находить бутылочные горлышки в бизнес-процессах 
                и устранять их с помощью технологий»
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-10">
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === tab.key ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"}`}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            {activeTab === "about" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Почему я эффективнее обычных разработчиков</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { title: "Фундаментальная база", desc: "4 года университета по управлению данными. Я не просто копирую код — я понимаю, что происходит под капотом." },
                    { title: "AI-усиление", desc: "Нейросети ускоряют разработку кратно. Берусь за задачи, требующие команды из 2-3 человек." },
                    { title: "Безопасность", desc: "Нейросети получают только обезличенные запросы. Критически важная информация под защитой." },
                    { title: "Дисциплина мышления", desc: "Правильная постановка вопроса важнее быстрого ответа. Я — руководитель, нейросеть — консультант." },
                  ].map(item => (
                    <div key={item.title} className="bg-gray-800 rounded-xl p-5 border border-gray-700/50">
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Ключевые компетенции</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { title: "Управление данными", desc: "Сбор, анализ, обработка, хранение и перемещение данных. Проектирование БД (SQLite, PostgreSQL), ETL, дашборды (Streamlit, Google Data Studio)." },
                    { title: "AI-интеграция", desc: "Промпт-инжиниринг, RAG-системы (ChromaDB, YandexGPT, OpenAI), AI-агенты для бизнеса." },
                    { title: "Full-stack разработка", desc: "Python (Aiogram, FastAPI, Django), React (Vite, Tailwind), парсинг (Playwright, BeautifulSoup), деплой (VPS, Nginx, systemd)." },
                    { title: "Бизнес-анализ", desc: "Аудит бизнес-процессов, выявление узких мест, оптимизация ресурсов. Опыт работы в консалтинговом агентстве." },
                    { title: "Документирование", desc: "Ведение технической документации, системный анализ, проектирование архитектуры." },
                    { title: "Data Engineering", desc: "ETL-пайплайны, векторизация данных, работа с векторными БД, автоматизация сбора данных." },
                  ].map(item => (
                    <div key={item.title} className="bg-gray-800 rounded-xl p-5 border border-gray-700/50">
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Реализованные проекты</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-gray-800"><th className="text-left py-3 px-4 text-gray-400">Проект</th><th className="text-left py-3 px-4 text-gray-400">Описание</th><th className="text-left py-3 px-4 text-gray-400">Стек</th></tr></thead>
                    <tbody className="text-gray-300">
                      {[
                        { name: "LeadForge", desc: "AI-система лидогенерации для MICE-агентства: парсер Tenchat, AI-генератор писем, дашборд с ABC+XYZ сегментацией. 768 лидов за прогон.", stack: "FastAPI, React, Playwright, YandexGPT" },
                        { name: "AI-агент для психолога", desc: "Telegram-бот для групповой терапии: запись, напоминания, AI-прогрев.", stack: "Aiogram, YandexGPT, Google Calendar API" },
                        { name: "AI-сомелье для кофейни", desc: "RAG-система с сохранением контекста, подбирает напитки/блюда под настроение.", stack: "Aiogram, YandexGPT Lite, ChromaDB" },
                        { name: "HR-бот для интервью", desc: "Проводит кандидата через вопросы, AI оценивает ответы и выдаёт вердикт.", stack: "Aiogram, YandexGPT, JSON" },
                        { name: "Парсер тендеров", desc: "Выгрузка коммерческих закупок с Контур.Закупки с извлечением контактов.", stack: "Playwright, Python" },
                      ].map((p, i) => (
                        <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/30"><td className="py-3 px-4 font-medium text-white">{p.name}</td><td className="py-3 px-4 text-gray-400">{p.desc}</td><td className="py-3 px-4 text-gray-500 text-xs">{p.stack}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Образование</h3>
                
                {/* Основное */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-3">Высшее образование</div>
                  <h4 className="text-lg font-semibold text-white mb-2">МИРЭА — Российский Технологический Университет</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Направление: «Прикладная информатика. Управление данными»
                  </p>
                  <p className="text-gray-500 text-xs mt-2">2022–2026</p>
                </div>

                {/* Дополнительное */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">Дополнительное образование</div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                      <div>
                        <p className="text-gray-200 text-sm font-medium">Курс элитной подготовки «Автоматизация Бизнес-Процессов на платформе Атом.РИТА»</p>
                        <p className="text-gray-500 text-xs mt-1">2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                      <div>
                        <p className="text-gray-200 text-sm font-medium">Обучающая программа «Открытый бизнес» ГК Ренна</p>
                        <p className="text-gray-500 text-xs mt-1">Ноябрь 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Практика */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-3">Практика</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Консалтинговое агентство «Paper Planes»</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Аудит бизнес-процессов, системный анализ
                  </p>
                  <p className="text-gray-500 text-xs mt-2">Декабрь 2025 – февраль 2026</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 border-t border-gray-800 px-8 py-4 text-center text-gray-600 text-sm">
        LeadForge © 2026 | Владислав Д. | AI-архитектор
      </footer>
    </div>
  )
}
