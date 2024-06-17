import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sources",
};

export default function SourcesPage() {
    return (
        <section className="max-w-6xl px-6 mx-auto mb-4 min-h-screen">
            <h1 className="mt-8 text-6xl text-center font-bold">Sources</h1>
            <div
                className="mt-8"
                style={{ lineHeight: 2, marginLeft: "2em", textIndent: "-2em" }}
            >
                <div className="csl-entry">
                    Alves, Bruna. “Topic: Electronic Waste Worldwide.”{" "}
                    <i>Statista</i>, 6 May 2024,
                    https://www.statista.com/topics/3409/electronic-waste-worldwide/.
                </div>
                <div className="csl-entry">
                    <i>Cleaning Up Electronic Waste (E-Waste)</i>. US EPA, 15
                    Nov. 2023,
                    https://www.epa.gov/international-cooperation/cleaning-electronic-waste-e-waste.
                </div>
                <div className="csl-entry">
                    <i>Electronic Waste (e-Waste)</i>. World Health
                    Organization, 18 Oct. 2023,
                    https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste).
                </div>
                <div className="csl-entry">
                    <i>Electronic Waste Recycling - NYSDEC</i>.
                    https://dec.ny.gov/environmental-protection/recycling-composting/electronic-waste-recycling.
                </div>
                <div className="csl-entry">
                    “E-Waste.” <i>LES Ecology Center</i>,
                    https://www.lesecologycenter.org/e-waste/.
                </div>
                <div className="csl-entry">
                    Forti, Vanessa, et al.{" "}
                    <i>
                        The Global E-Waste Monitor 2020: Quantities, Flows and
                        the Circular Economy Potential.
                    </i>{" "}
                    United Nations Institute for Training and Research.
                </div>
            </div>
        </section>
    );
}
