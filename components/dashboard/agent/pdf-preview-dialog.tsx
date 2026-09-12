'use client';

/**
 * A document shown as a PDF, in a dialog, before it is saved anywhere.
 *
 * The same `BlobProvider` + iframe the admin invoice dialog uses: the blob URL
 * is held here rather than inside `PDFViewer`, which is what lets the download
 * be a plain anchor and a failed render say so instead of showing an empty
 * frame.
 *
 * `@react-pdf/renderer` is heavy and speaks to browser APIs, so it is pulled
 * in only once a document is actually asked for.
 */
import type { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { Download } from 'lucide-react';

import { BlinkingDots } from '@/components/blinking-dots';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

const Preparing = () => (
  <div className="flex h-full items-center justify-center py-16">
    <BlinkingDots size="large" color="bg-watney" />
  </div>
);

const BlobProvider = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.BlobProvider),
  { ssr: false, loading: Preparing }
) as any;

export function PdfPreviewDialog({
  open,
  onOpenChange,
  title,
  fileName,
  pdfDocument
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  fileName: string;
  /** The `<Document>` to render; absent while nothing is selected. */
  pdfDocument: ReactElement | null;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {/* Mounted only while open, so a closed dialog is not holding a
            rendered document - and its blob URL - alive in the background. */}
        {open && pdfDocument ? (
          <BlobProvider document={pdfDocument}>
            {({
              url,
              loading,
              error
            }: {
              url: string | null;
              loading: boolean;
              error: Error | null;
            }) => (
              <div className="flex flex-col gap-3">
                <div className="h-[70vh] w-full overflow-hidden rounded-md border border-gray-200 bg-gray-100">
                  {error ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                      <p className="text-sm font-medium text-black">
                        This document could not be rendered.
                      </p>
                      <p className="max-w-md text-xs text-black">
                        {error.message || String(error)}
                      </p>
                    </div>
                  ) : loading || !url ? (
                    <Preparing />
                  ) : (
                    <iframe
                      src={url}
                      title={title}
                      className="h-full w-full border-0"
                    />
                  )}
                </div>

                {url && !error ? (
                  <div className="flex justify-end">
                    <a href={url} download={fileName}>
                      <Button
                        size="sm"
                        className="bg-watney text-white hover:bg-watney/90"
                      >
                        <Download className="mr-1.5 h-3.5 w-3.5" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                ) : null}
              </div>
            )}
          </BlobProvider>
        ) : (
          <div className="h-[70vh]">
            <Preparing />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PdfPreviewDialog;
