import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([19.4326, -99.1332], 12); // CDMX

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([19.4326, -99.1332])
      .addTo(map)
      .bindPopup("Centro de la Ciudad de México")
      .openPopup();

    // Limpieza al desmontar
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      className="w-full h-[70vh] rounded-xl shadow-lg border border-gray-200"
    ></div>
  );
}
