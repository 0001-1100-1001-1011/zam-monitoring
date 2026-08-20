import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import HeaderNavigation from "../components/HeaderNavigation.jsx";
import CveTable from "../components/CveTable.jsx";

export default function Cves() {
  const [cves, setCves] = useState([]);

  useEffect(() => {
    const dummy = [
      {
        cve_id: "CVE-2026-34265",
        product: "SAP NetWeaver",
        description:
          "SAP NetWeaver Application Server ABAP allows an unauthenticated attacker to exploit logical errors in DIAG protocol parsing, resulting in memory corruption. This vulnerability could potentially disclose sensitive system information or crash the system, leading to a high impact on the confidentiality, integrity, and availability of the application.",
        published_at: "2026-08-11 01:17:20",
      },
      {
        cve_id: "CVE-2025-31114",
        product: "XZ Utils",
        description:
          "XZ Utils provide a general-purpose data-compression library plus command-line tools. In XZ Utils 5.3.3alpha to 5.8.0, the multithreaded .xz decoder in liblzma has a bug where invalid input can at least result in a crash. The effects include heap use after free and writing to an address based on the null pointer plus an offset. Applications and libraries that use the lzma_stream_decoder_mt function are affected. The bug has been fixed in XZ Utils 5.8.1, and the fix has been committed to the v5.4, v5.6, v5.8, and master branches in the xz Git repository. No new release packages will be made from the old stable branches, but a standalone patch is available that applies to all affected releases.",
        published_at: "2026-08-11 01:17:20",
      },
      {
        cve_id: "CVE-2026-11733",
        product: "RAX41",
        description:
          "BeyondTrust Remote Support (RS) and certain older versions of Privileged Remote Access (PRA) contain a critical pre-authentication remote code execution vulnerability. By sending specially crafted requests, an unauthenticated remote attacker may be able to execute operating system commands in the context of the site user.",
        published_at: "2026-08-11 01:17:20",
      },
    ];
    setCves(dummy);
  }, []);

  return (
    <>
      {/* HEADER */}
      <Sidebar />
      <HeaderNavigation />
      {/* MAIN CONTAINER */}
      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16">
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-3/4 space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">CVEs</h1>
          <p className="text-center text-gray-300">
            Current detections from services.nvd.nist.gov
          </p>

          <CveTable cves={cves} />
        </div>
      </div>
    </>
  );
}
