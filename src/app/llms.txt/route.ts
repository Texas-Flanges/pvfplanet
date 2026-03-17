import { NextResponse } from "next/server";

export async function GET() {
  const content = `# PVF Planet\n> Pipes, Valves, and Fittings Industry Resource Hub\n\n## About\nPVF Planet (pvfplanet.com) is an industry resource hub dedicated to Pipes, Valves, and Fittings (PVF). We provide comprehensive information, technical guidance, and insights for engineers, buyers, and technicians navigating the industrial PVF landscape.\n\n## Content\n- Educational articles on pipes, valves, and fittings\n- Industry standards and compliance information (ASME, ANSI, API)\n- Technical specifications and material grades\n- Quality and sourcing guidance\n- Best practices for component selection\n\n## Services\n- Resource hub and educational content\n- Industry insights and technical articles\n- Standards compliance information\n- Material selection guidance\n- Partnership with Texas Flange & Fitting Supply\n\n## Contact\n- Email: sales@texasflange.com\n- Phone: 281-484-8325\n- Website: https://pvfplanet.com\n- Quote requests: https://www.texasflange.com/contact-us/?ref=pvfplanet\n\n## Standards\nASME B16.5, ASME B16.47, ASME B16.36, API 605, API 6A, MSS SP-44, ASTM material specifications`;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
