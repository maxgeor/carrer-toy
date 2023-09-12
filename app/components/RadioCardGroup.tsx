import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function RadioCard({ career }: { career: string }) {
  return (
    <Label htmlFor={career}>
      <RadioGroupItem value={career} id={career} className="hidden peer" />
      <div className="flex flex-col items-center justify-center p-12 w-[250px] h-[250px] bg-gradient-from-t from-white to-gray-50 shadow-lg rounded-lg ring-1 ring-gray-800/[7%] hover:scale-[101%] transition-all peer:checked:bg-red-500">
        <p className="text-xl italic font-serif">{career}</p>
      </div>
    </Label>
  );
}

export function RadioCardGroup({ careers }: { careers: [string, string]}) {
  return (
    <RadioGroup className='flex gap-12'>
      {careers.map((career) => <RadioCard key={career} career={career} />)}
    </RadioGroup>
  );
}
