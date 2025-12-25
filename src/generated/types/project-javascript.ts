import { ScriptType } from "./enums";
import { ProjectHtmlModel, ProjectHtmlCreateInput } from "./project-html";
import { ProjectModel, ProjectCreateInput } from "./project";

export interface ProjectJavascriptModel {
  id: string;
  jsContent: string;
  fileName: string | null;
  functionName: string | null;
  scriptType: ScriptType;
  isModule: boolean;
  isAsync: boolean;
  dependencies: any | null;
  exports: any | null;
  sourceMap: string | null;
  minified: boolean;
  position: number;
  isEnabled: boolean;
  htmlElementId: string | null;
  projectHtml?: ProjectHtmlModel;
  projectId: string;
  createdAt: string;
  updatedAt: string;
  project?: ProjectModel;
}

export interface ProjectJavascriptCreateInput {
  id?: string;
  jsContent: string;
  fileName?: string | null;
  functionName?: string | null;
  scriptType?: ScriptType;
  isModule?: boolean;
  isAsync?: boolean;
  dependencies?: any | null;
  exports?: any | null;
  sourceMap?: string | null;
  minified?: boolean;
  position?: number;
  isEnabled?: boolean;
  htmlElementId?: string | null;
  projectHtml?: ProjectHtmlCreateInput;
  projectId?: string;
  createdAt?: string;
  updatedAt?: string;
  project?: ProjectCreateInput;
}

export type ProjectJavascriptUpdateInput = Partial<ProjectJavascriptCreateInput>;

