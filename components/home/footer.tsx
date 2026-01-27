import { Globe, Mail, MessageCircle } from "lucide-react";
import type { LanguageType } from "@/lib/translations/config";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: {
    title: "产品",
    links: [
      { label: "节日学习", href: "#festivals" },
      { label: "美食图鉴", href: "#food" },
      { label: "实用工具", href: "#tools" },
      { label: "互动测验", href: "#quiz" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { label: "使用指南", href: "#" },
      { label: "常见问题", href: "#" },
      { label: "博客", href: "#" },
      { label: "词汇表", href: "#" },
    ],
  },
  company: {
    title: "关于",
    links: [
      { label: "我们的故事", href: "#" },
      { label: "联系我们", href: "#" },
      { label: "加入团队", href: "#" },
      { label: "合作伙伴", href: "#" },
    ],
  },
};

export function Footer({ lang }: { lang: LanguageType }) {
  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-rose-600/5 to-transparent pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-rose-500/20 transition-transform group-hover:scale-105">
                  节
                </div>
                <div className="absolute inset-0 rounded-xl bg-rose-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className="font-semibold font-serif">节日文化通</span>
            </div>
            <p className="text-sm text-background/70 mb-6 max-w-sm">
              帮助外国朋友通过节日场景，学会说什么、做什么、怎么做。从"知道"到"会用"，让文化理解变得实用。
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10 transition-all duration-200"
                aria-label="Language"
              >
                <Globe className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10 transition-all duration-200"
                aria-label="Contact"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-background/50">
          <p>&copy; 2026 节日文化通. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href={`/${lang}/privacy`}
              className="hover:text-background transition-colors"
            >
              隐私政策
            </a>
            <a
              href={`/${lang}/terms`}
              className="hover:text-background transition-colors"
            >
              使用条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
