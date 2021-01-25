import { useEffect, useState } from "react";
import Layout from "../components/Layout";

type License = {
  licenses: string;
  repository: string;
  publisher: string;
  path: string;
  licenseFile: string;
};

export default function License() {
  const [licenses, setLicenses] = useState(null);

  useEffect(() => {
    const filePath = `${process.env.NEXT_PUBLIC_WEB_URL}/data/license.json`;
    async function loadLicense(filePath: string) {
      const res = await fetch(filePath);
      const json = await res.json();

      setLicenses(json);
    }

    loadLicense(filePath);
  }, []);

  return (
    <Layout>
      {licenses !== null && (
        <ul className="list-group w-100">
          {Object.keys(licenses).map((key) => {
            return (
              <li key={key} className="list-group-item">
                <p>{`${key}(${licenses[key].licenses})`}</p>
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
}
