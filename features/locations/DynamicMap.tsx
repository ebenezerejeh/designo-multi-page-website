"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(
  () => import("./LocationMap").then((m) => m.LocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-light-grey animate-pulse rounded-[15px]" />
    ),
  }
);

interface Props {
  lat: number;
  lng: number;
  label: string;
}

export function DynamicMap({ lat, lng, label }: Props) {
  return <LocationMap lat={lat} lng={lng} label={label} />;
}
