import { useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { FileText, DoorOpen } from 'lucide-react';
import RecordsList from './RecordsList';
import PermitsList from './PermitsList';

export default function RecordsAndPermits() {
    const [activeTab, setActiveTab] = useState<'records' | 'permits'>('records');

    return (
        <div className="min-h-screen bg-slate-50/50 text-[#0A0E2E]">
            <AppHeader 
                title="Records & Permits" 
                subtitle="Discipline tracking and leave authorizations" 
            />

            <div className="mx-auto max-w-7xl px-6 py-8 animate-in fade-in duration-700">
                <div className="mb-6 rounded-md border border-[#0A0E2E]/10 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md w-fit">
                        <button
                            onClick={() => setActiveTab('records')}
                            className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                                activeTab === 'records' 
                                    ? 'bg-[#0A0E2E] text-white shadow-md' 
                                    : 'text-[#0A0E2E]/60 hover:text-[#0A0E2E]'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5" /> Discipline Records
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab('permits')}
                            className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                                activeTab === 'permits' 
                                    ? 'bg-[#0A0E2E] text-white shadow-md' 
                                    : 'text-[#0A0E2E]/60 hover:text-[#0A0E2E]'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <DoorOpen className="w-3.5 h-3.5" /> Leave Permits
                            </div>
                        </button>
                    </div>
                </div>

                {activeTab === 'records' ? <RecordsList hideHeader /> : <PermitsList hideHeader />}
            </div>
        </div>
    );
}
