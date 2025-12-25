import { ProjectStatus } from "./enums";
import { UserModel, UserCreateInput } from "./user";
import { ProjectContentModel, ProjectContentCreateInput } from "./project-content";
import { ProjectHtmlModel, ProjectHtmlCreateInput } from "./project-html";
import { ProjectJavascriptModel, ProjectJavascriptCreateInput } from "./project-javascript";

export interface ProjectModel {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user?: UserModel;
  projectContents?: ProjectContentModel[];
  projectHtmls?: ProjectHtmlModel[];
  projectJavascripts?: ProjectJavascriptModel[];
}

export interface ProjectCreateInput {
  id?: string;
  name: string;
  description?: string | null;
  imageUrl?: string | null;
  status?: ProjectStatus;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  user?: UserCreateInput;
  projectContents?: ProjectContentCreateInput[];
  projectHtmls?: ProjectHtmlCreateInput[];
  projectJavascripts?: ProjectJavascriptCreateInput[];
}

export type ProjectUpdateInput = Partial<ProjectCreateInput>;

