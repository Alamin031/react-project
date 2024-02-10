import React from 'react';
import { Correct, Go, Person } from '@/icons';
import { DashboardForm } from '@/types/DashboardTypes';
import { useRouter } from 'next/router';
import { Button } from '../buttons';

function DashboardCard({
  id,
  draft,
  itr,
  date,
  studentName,
  score,
  type,
  industry,
}: DashboardForm) {
  const router = useRouter();

  const redirectCB = (path: string) => router.push(path);
  return (
    <div className="ma:w-[424px] flex flex-shrink-0 flex-col items-center rounded-lg border border-gray-200 bg-white">
      <div className="flex flex-col items-center gap-6 self-stretch p-6">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex items-start gap-2 self-stretch">
              <p className="text-sm font-medium not-italic text-gray-400">
                {itr}
              </p>
              <p className="text-sm font-medium not-italic text-gray-400">•</p>
              <p className="text-sm font-medium not-italic text-gray-400">
                {date}
              </p>
            </div>
            <h3 className="overflow-hidden text-xl font-light not-italic text-gray-900">
              {industry}
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <Person />
            <p className="text-sm font-medium not-italic text-gray-400">
              {studentName}
            </p>
          </div>
          <div className=" items-center justify-between self-stretch md:flex">
            <div className="-gap-2 relative flex h-[6px] w-56 flex-col items-start justify-center overflow-hidden rounded-lg bg-gray-100">
              <span
                style={{
                  width: `${draft}%`,
                }}
                className={`absolute h-full flex-shrink-0 rounded-lg ${
                  type === 'pending' ? 'bg-purple-200' : 'bg-blue-300'
                }`}
              />
            </div>

            {type === 'pending' ? (
              <p className="text-right text-xs font-extralight not-italic text-gray-400 max-md:my-1">
                Draft • {draft}% Completed
              </p>
            ) : (
              <p className="flex justify-end gap-1 text-right text-xs font-extralight not-italic text-gray-400 max-md:my-1">
                <Correct />
                Final Draft Sent
              </p>
            )}
          </div>
          <div
            className={`items-center justify-between self-stretch rounded-lg md:flex ${
              type === 'pending' ? 'bg-purple-200' : 'bg-blue-300'
            }
               px-6 py-4`}
          >
            <div className="flex items-center gap-1">
              <h1 className="text-4xl font-light not-italic text-white">
                {score}
              </h1>
              <div className="-gap-1 flex flex-col items-start justify-center">
                <p className="text-xs font-light not-italic text-white">
                  CURRENT
                </p>
                <p className="text-xs font-light not-italic text-white">
                  SCORE
                </p>
              </div>
            </div>

            <Button onClick={() => redirectCB(`/${id}`)} icons={<Go />}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

DashboardCard.defaultProps = {
  draft: 100,
  type: 'pending',
};

export default DashboardCard;
