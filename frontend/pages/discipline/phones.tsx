import { DisciplineLayout } from "@/components/layout/DisciplineLayout";
import PhoneBorrowList from "@/pages/discipline/PhoneBorrowList";

export default function DisciplinePhonesRoute() {
    return (
        <DisciplineLayout>
            <PhoneBorrowList />
        </DisciplineLayout>
    );
}
