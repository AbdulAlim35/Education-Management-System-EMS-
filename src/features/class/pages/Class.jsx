import PageLayout from "@/components/share/PageLayout";
import TableLayout from "@/components/share/TableLayout";
import tableConfig from "../config/tableConfig";
import fields from "../config/fields";
import BasicModel from "@/components/share/basicModel";
import useClass from "../hooks/useClass";
import FormLayout from "@/components/share/FormLayout";

export default function Class() {
  const studentClass = useClass();
  return (
    <>
      <PageLayout
        title="Class Management"
        description="Manage class information and records"
        buttonLabel="Add Class"
        header="Add New Class"
        form={studentClass.form}
      >
        <BasicModel header="Create Class" form={studentClass.form} size="w-[25%]">
          <FormLayout formData={studentClass} fields={fields} />
        </BasicModel>

        <TableLayout
          filter={false}
          columns={tableConfig(studentClass.action)}
          data={studentClass.user}
        />
      </PageLayout>
    </>
  );
}
