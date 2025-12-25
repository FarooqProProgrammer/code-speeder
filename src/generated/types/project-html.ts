import { ProjectModel, ProjectCreateInput } from "./project";
import { ProjectJavascriptModel, ProjectJavascriptCreateInput } from "./project-javascript";

export interface ProjectHtmlModel {
  id: string;
  htmlContent: string;
  nodeName: string | null;
  nodeType: string | null;
  attributes: any | null;
  parentId: string | null;
  parent?: ProjectHtmlModel;
  children?: ProjectHtmlModel[];
  position: number;
  isVisible: boolean;
  projectId: string;
  createdAt: string;
  updatedAt: string;
  project?: ProjectModel;
  projectJavascripts?: ProjectJavascriptModel[];
}

export interface ProjectHtmlCreateInput {
  id?: string;
  htmlContent: string;
  nodeName?: string | null;
  nodeType?: string | null;
  attributes?: any | null;
  parentId?: string | null;
  parent?: ProjectHtmlCreateInput;
  children?: ProjectHtmlCreateInput[];
  position?: number;
  isVisible?: boolean;
  projectId?: string;
  createdAt?: string;
  updatedAt?: string;
  project?: ProjectCreateInput;
  projectJavascripts?: ProjectJavascriptCreateInput[];
}

export type ProjectHtmlUpdateInput = Partial<ProjectHtmlCreateInput>;

