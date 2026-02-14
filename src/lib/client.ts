import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { CodeGenService } from "@/gen/codegen/v1/codegen_pb";

// Gunakan NEXT_PUBLIC agar variabel ini bisa dibaca di sisi browser (client-side)
const transport = createConnectTransport({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001",
});

export const codeGenClient = createClient(CodeGenService, transport);