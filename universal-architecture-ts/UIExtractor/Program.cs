using System;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;
namespace UIExtractor
{
    class Program
    {
        static void Main(string[] args)
        {
            string application_name = "ERUI";
            Console.WriteLine("Hello World!");
            DataSet ds = new DataSet();
            string dir = new FileInfo(Assembly.GetExecutingAssembly().Location).DirectoryName;
            if (File.Exists("ModuleConfigurationElementCollection.xml"))
            {
                ds.ReadXml("ModuleConfigurationElementCollection.xml");
                var elements = ds.Tables[0].Rows.Cast<DataRow>().Select(e => new { Name = e["Name"].ToString(), AssemblyFile = e["AssemblyFile"].ToString(), TypeName = e["TypeName"].ToString() }).ToArray();
                foreach (var dll in elements)
                {

                    Assembly assembly = Assembly.LoadFile(System.IO.Path.Combine(dir, dll.AssemblyFile));
                    Stream txtResourceStream = assembly.GetManifestResourceStream(assembly.GetManifestResourceNames().Where(e => e.Contains("resources.txt")).FirstOrDefault());

                    using (StreamReader reader = new StreamReader(txtResourceStream))
                    {
                        string[] local_resources = assembly.GetManifestResourceNames();
                        string line;
                        while ((line = reader.ReadLine()) != null)
                        {
                            string file_name = line.Split("\\").Last();
                            string resource_name = local_resources.Where(e => e.Contains(file_name)).FirstOrDefault();
                            using (Stream stream = assembly.GetManifestResourceStream(resource_name))
                            {
                                string destPath = dir + "\\" + application_name + line;// Path.Combine(dir + "\\" + application_name, line);
                                try
                                {
                                    FileInfo fileInfo = new FileInfo(destPath);

                                    if (!fileInfo.Exists)
                                    {
                                        Directory.CreateDirectory(fileInfo.Directory.FullName);
                                        File.Create(destPath).Close();
                                    }
                                }
                                catch
                                {

                                }
                                using (var fileStream = new FileStream(destPath, FileMode.Create, FileAccess.Write))
                                {
                                    stream.CopyTo(fileStream);
                                }

                            }
                        }
                    }
                }

            }
        }
    }
}
