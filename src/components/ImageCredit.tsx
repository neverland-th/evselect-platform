type ImageCreditProps = {
  author: string;
  source: string;
  license: string;
  licenseUrl: string;
  className?: string;
};

export function ImageCredit({ author, source, license, licenseUrl, className = '-mt-9 mb-12' }: ImageCreditProps) {
  return (
    <p className={`${className} text-xs leading-relaxed text-slate-500`}>
      ภาพประกอบ: <a href={source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{author} / Wikimedia Commons</a>
      {' · '}<a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{license}</a>
      {' · '}แสดงภาพในขนาดที่เหมาะกับหน้าเว็บ
    </p>
  );
}
