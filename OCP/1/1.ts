class ReportProcessory {
  process(report) {
    report.process()
  }
}

interface IReportProcessor {
  process(): void;
};

class ReportProcessorPDF implements IReportProcessor{
  process(): void {
    console.log("Processing PDF report...");
  };

};

class ReportProcessorCSV implements IReportProcessor{
  process(): void {
    console.log("Processing CSV report...");
  };

};

const processory = new ReportProcessor();
const report = new ReportProcessorPDF()
processory.process(report)
