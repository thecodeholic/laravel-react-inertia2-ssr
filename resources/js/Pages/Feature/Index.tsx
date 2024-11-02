import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {Feature, PaginatedData} from "@/types";
import FeatureItem from "@/Components/FeatureItem";

export default function Index({features}: {features: PaginatedData<Feature>}) {
  console.log(features)
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Features
        </h2>
      }
    >
      <Head title="Dashboard"/>

      {features.data.map(feature => (
        <FeatureItem feature={feature} />
      ))}
    </AuthenticatedLayout>
  );
}
