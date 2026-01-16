import { Globe, Mail, MessageCircle } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-sm">
                节
              </div>
              <span className="font-semibold">节日文化通</span>
            </div>
            <p className="text-sm text-background/70 mb-6 max-w-sm">
              帮助外国朋友通过节日场景，学会说什么、做什么、怎么做。从"知道"到"会用"，让文化理解变得实用。
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
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
                      className="text-sm text-background/60 hover:text-background transition-colors"
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
            <a href="#" className="hover:text-background transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-background transition-colors">
              使用条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
